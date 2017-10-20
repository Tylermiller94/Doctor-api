# _Better Doctor_

## Description

#### _An application using BetterDoctor API
#### By _**Tyler Miller**_


## Specifications
* A user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup/Installation Requirements

* Clone directory from github using git

### Installing the necessary database:

* clone this repo_
* In terminal, navigate into where you would like this project to live._
* In your terminal enter: $ git clone
* In your terminal enter: $ npm install
* In your terminal enter: $ bower install
* In your terminal enter: $ gulp build
* In your terminal enter: $ gulp serve

## Support
Feel free to contact me at tylermiller94@gmail.com

## Technologies Used

-HTML
-CSS
-Materialize
-javascript
-jQuery
-BetterDoctorAPI

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 Tyler Miller
