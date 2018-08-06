# kwf-react-starter

## Installation

#### Add `composer-subproject` to composer.json

    ...
    "koala-framework/composer-subproject": "1.0.x-dev"
    ...
    "extra": {
        ...
        "koala-framework-subproject": {
            "kwf-react-starter": {
                "install": "npm install",
                "build": "npm run build"
            }
        }
    }

#### Clone `kwf-react-starter` into project

    git clone git@github.com:koala-framework/react-starter.git kwf-react-starter
    rm -rf kwf-react-start/.git

#### Activate prettier for `.ts`, `.tsx`, `.js`, `.jsx`, `.json`, `.css`

## TODO's

-   Gitlab Runner config for checking if prettier is active
