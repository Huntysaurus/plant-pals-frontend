## Plant Pals

Front-end created with Node.js and React

## The idea behind Plant Pals

Plant Pals is a basic CRUD application which uses a Ruby backend alongside the Sinatra and Active Record ruby gems. Data is stored on the backend using SQL tables. The link to the backend can be found here, https://github.com/Huntysaurus/phase-3-sinatra-react-project.

Plant Pals allows users to share photos and information on their plants with other users for knowledge and entertainment purpses. 

Plant Pals uses a one-to-many relationship on its backend with a User and Plant class where a single user can have many plants. Users can be created using a Name, Username and Password which will perform a POST request for the User class, creating a new instance of User. To prevent duplication, users can not have the same username. Users can also log in using an existing username and password, performing a GET request on users and obtaining a specific User class instance.

Once logged in or created, a user will be taken to a public page where a GET request is performed for all Plant class instances created by users and then be appended on the DOM as individual plant cards. Plant cards contain information from the plant class including: a name, image, description, light_preference, care_difficulty, and age. Users can fill out a form at the top of the page to perform a POST request for a new plant, creating a new instance of the Plant class, which will immediately appear on the DOM and have a user_id of that specific user on the SQL backend. Users also have the ability to perform a PATCH and DELETE request using the edit and delete buttons under plants that are owned by that specific user.

## Setup

To run the front-end, simply install using npm:

```
$ npm install
```
To run the application in the browser:
```
$ npm start
```
clone the backend onto your local environment to use in-tandem with the front-end. The backend comes pre-loaded with seed data that can be manipulated as well.

## History
0.1 (2022-05-29) - functional MVP
0.2 (2023-01-28) - Fully styled client  

## source material

backdrop collage of plants from https://www.istockphoto.com/
