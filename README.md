# find-my-ip-api

API to find your public ip address.

Production URL: https://find-my-ip.herokuapp.com

## API specification

https://find-my-ip.herokuapp.com/api-specs

## Operations

-   findMyIp:
    -   path: "/"
    -   method: "GET"
    -   description: "Find your IP address"
-   ping:
    -   path: "ping"
    -   method: "GET"
    -   description: "Ping the service"
-   apiOperations:
    -   path: "api-operations"
    -   method: "GET"
    -   description: "Get the api operations"

## Installation

`npm install`

## Build

`npm run build`

## Usage

-   development server: `npm run dev`
-   production server: `npm run start`

## dependencies

-   @babel/runtime
-   cors
-   express
-   js-yaml
-   swagger-ui-express

## devDependencies

-   @babel/core
-   @babel/node
-   @babel/plugin-transform-runtime
-   @babel/preset-env
-   babel-loader
-   jest
-   nodemon
-   prettier
-   webpack
-   webpack-cli
-   webpack-node-externals
