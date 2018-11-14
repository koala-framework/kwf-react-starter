#!/usr/bin/env node_modules/.bin/ts-node

/* tslint:disable:no-console */
import { ncp } from "ncp";
import * as path from "path";

const rootDir = path.resolve(__dirname, "..");
ncp(path.resolve(rootDir, "assets/build/kwf-react-starter"), path.resolve(rootDir, "../build/assets/kwf-react-starter"), (err: Error) => {
    if (err) return console.error(err);
    console.log("Copied build to KWF");
});
