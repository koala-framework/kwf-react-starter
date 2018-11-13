/* tslint:disable:no-console variable-name */
const colors = require("colors");
const path = require("path");
const _prompt = require("prompt");
const { readFileSync, writeFileSync } = require("fs");
const replace = require("replace-in-file");
const { rm } = require("shelljs");

const rmDirs = [".git", "tools"];
const rmFiles = ["README.md"];
const rmPackages = ["colors", "prompt", "replace-in-file", "shelljs"];
const modifyFiles = ["package.json", "index.ts", "public/index.html", "src/config/index.ts"];

_prompt.start();
_prompt.message = "";
_prompt.get(
    {
        properties: {
            packageName: {
                description: colors.cyan("What do you want the package to be called? (use kebab-case)"),
                pattern: /^[a-z]+(\-[a-z]+)*$/,
                type: "string",
                required: true,
                message: colors.red('"kebab-case" uses lowercase letters, and hyphens for any punctuation'),
            },
        },
    },
    (err: any, res: any) => {
        if (err) {
            console.error("Sorry, there was an error building the workspace :(");
            process.exit(1);
            return;
        }

        setupPackage(res.packageName);
    },
);

/**
 * Calls all of the functions needed to setup the package
 */
const setupPackage = (packageName: string) => {
    console.log(colors.cyan("\nThanks for the info. The last few changes are being made... hang tight!\n\n"));

    removeItems();
    modifyContents(packageName);
    finalize();

    console.log(colors.cyan("OK, you're all set. Happy coding!! ;)\n"));
};

/**
 * Removes items from the project that aren't needed after the initial setup
 */
const removeItems = () => {
    console.log(colors.underline.white("Removed"));

    const rmItems = rmDirs.concat(rmFiles);
    rm("-rf", rmItems.map(f => path.resolve(__dirname, "..", f)));

    console.log(colors.red(rmItems.join("\n")));
    console.log("\n");
};

/**
 * Updates the contents of the template files with the package name or user details
 */
const modifyContents = (packageName: string) => {
    console.log(colors.underline.white("Modified"));

    const files = modifyFiles.map(f => path.resolve(__dirname, "..", f));
    try {
        replace.sync({
            files,
            from: [/kwf-react-starter/g, /KWF_REACT_STARTER/g],
            to: [
                packageName,
                packageName
                    .toUpperCase()
                    .split("-")
                    .join("_"),
            ],
        });
        console.log(colors.yellow(modifyFiles.join("\n")));
    } catch (error) {
        console.error("An error occurred modifying the file: ", error);
    }

    console.log("\n");
};

/**
 * Finish installation and remove post-install command
 */
const finalize = () => {
    console.log(colors.underline.white("Finalizing"));

    // Remove post-install command
    const jsonPackage = path.resolve(__dirname, "..", "package.json");
    const pkg = JSON.parse(readFileSync(jsonPackage) as any);
    delete pkg.scripts.postinstall;
    rmPackages.forEach(rmPackage => {
        delete pkg.devDependencies[rmPackage];
    });
    writeFileSync(jsonPackage, JSON.stringify(pkg, null, 4));

    console.log(colors.green("Postinstall script has been removed"));
    console.log("\n");
};
