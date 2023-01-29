## Plant Pals

A plant-sharing app! Front-end created with Node.js and React.

## The Idea Behind Plant Pals
---

Plant Pals is a basic CRUD application which uses a Ruby backend alongside the Sinatra and Active Record. By running the separate back-end in tandem with the front-end, users have the ability to create, update and delete posts about their plants as well as see other users' posts about plants. 
___
The link to the separate backend can be found here, https://github.com/Huntysaurus/phase-3-sinatra-react-project.
___

Plant Pals uses a one-to-many relationship on its backend with a User and Plant class where a single user can have many plants. Users can be created using a Name, Username and Password which will perform a POST request for the User class, creating a new instance of User. To prevent duplication, users can not have the same username.

## Technologies
### Front-end
* Node.js
* React

### Back-end
* Ruby
* Active Record
* Sinatra
---
## Launch
Run these commands to install and launch the app on your local server. To get full use out of this, download and install the back-end client and run on a separate local port.

```
$ npm install
```
To run the application in the browser:
```
$ npm start
```
clone the backend onto your local environment to use in-tandem with the front-end. The backend comes pre-loaded with seed data that can be manipulated as well.

## Usage Examples

![home screen](https://github.com/Huntysaurus/stratify-app/blob/main/images/plant%20pals%20home.png)

The app launches at the home screen where a user has the ability to either log in or sign up. In order to sign up a user provides a name, username and password.
* The only validation is that usernames be unique

![plant page](https://github.com/Huntysaurus/stratify-app/blob/main/images/plant%20page.png)

Once logged in, users are taken to the plant page, where they can view every plant that has been uploaded by users. Users have the ability to log back out by clicking the log out button in the upper left-hand corner. This button will follow the user as they scroll through the page.

![plant card](https://github.com/Huntysaurus/stratify-app/blob/main/images/plant%20card.png)

Individual plant cards contain the following attributes:
* name
* image
* description
* light_preference
* care_difficulty
* age
* user_id

When running the seed data, several plants are created using these attributes. Feel free to manipulate the seed data as you wish. Keep in mind that certain attributes can not be created by the user from a UI standpoint, such as care_difficulty and light_preference and will only be filled in by an HTML select element, and used as an option when creating new plants.
* this can of course be changed by changing information in the select elements located in the EditPlant and PlantForm components

![create plant](https://github.com/Huntysaurus/stratify-app/blob/main/images/create%20plant.png)

The create plant form, which will follow the user as they scroll through the plants page, is used to create new plants. For the image to show properly, a public link to the image must be used. The change will show on the DOM immediately after being created.
* plants on the page are shown in the order that they are created

![plant card owner](https://github.com/Huntysaurus/stratify-app/blob/main/images/plant%20card%20owner.png)

The user has additional options for plants on the page that belong to them, including delete and update. 
* clicking delete on a plant will immediately destroy the plant and update the changes without warning

![update plant](https://github.com/Huntysaurus/stratify-app/blob/main/images/plant%20card%20update.png)

Several form fields will appear when clicking the Update button, giving the user the option to update the image, description and age of the plant. Clicking the Confirm Changes button will append the changes and immediately show on the DOM.
* clicking Cancel will return the plant to its original state, removing the additional form fields

---
## Project Status

Current Models

* user
* plant

The purpose of this application is to demonstrate a one-to-many relationship with 2 models. As the application grows, it may have more complex relationships with more models.

## Contributing

I'm open to seeing what others would like to do with this project. Always open to constructive criticism and making new coding connections as well!

* Fork to your local environment
* Create changes:
```
git checkout -b my-creation
```
* commit your changes:
```
git commit -am 'add a feature'
```
* push changes to the branch:
```
git push origin 'my-new-feature'
```
* submit a pull request

## History
* 0.1 (2022-05-29) - functional MVP
* 0.2 (2023-01-28) - Fully styled client  

## source material

backdrop collage of plants from https://www.istockphoto.com/
