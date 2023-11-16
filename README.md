# Vemo Test 

A project for countries


## Author

Jerónimo Sola


## Description

in this website an user can get information about any country.  


# Backend

## Running instructions

**npm install** --> install dependencies  
**npm start** &nbsp; --> run locally in port 3000  
**npm test** &nbsp; --> run all unit test

For charge process to the database set the env variable CHARGE_PROCESS to true

## env file

TEST_DB_USERNAME=jero12345
TEST_DB_PASSWORD=Arturo123!
TEST_DB_DATABASE=jero12345_vemo
TEST_DB_HOST=mysql-jero12345.alwaysdata.net
TEST_DB_DIALECT=mysql
TEST_DB_PORT=3306

PRODUCTION_DB_USERNAME=jero12345
PRODUCTION_DB_PASSWORD=Arturo123!
PRODUCTION_DB_DATABASE=jero12345_vemo
PRODUCTION_DB_HOST=mysql-jero12345.alwaysdata.net
PRODUCTION_DB_DIALECT=mysql
PRODUCTION_DB_PORT=3306

BEARER_TOKEN=TTxxddse40301dwer134*6*7e1ll!w
CHARGE_PROCESS=false


## Dependencies

axios 
chai 
cheerio 
cors
dotenv
express
express-validator
method-override
mocha
mysql2
nodemon
sequelize
sequelize-cli
sinon


## Documentation 

Database diagram

Database script

Api documentation


## Future upgrades

Bearer Token Authorization: The implementation of bearer token authorization for access is complete. All that remains is to apply the requestAuthorization middleware to the requests.

Enhanced API Documentation: There is a need to enhance, complete and formalize the API documentation. It should provide more comprehensive and structured information.

Change javaScript files to Typescript and change require for import

Add dates fields to database structure and add user information

Features for user register and login. To have user account for tracking operations and security. 







# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
