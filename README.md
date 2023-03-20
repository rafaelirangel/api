## The Natural Adventure API
This project goal is to create a REST API with full CRUD operations from scratch using MongoDb, Mongoose and Express.js.

## About 
This REST API was inspired by my passion for nature and adventure.  
You can find information such as Hiking Trails, Campground, Parks and Tours(Nature, Historic and Cave Tours).  
It was created using:
- [NPS API](https://www.nps.gov/subjects/developer/api-documentation.htm#/),  
- [RIDB API](https://ridb.recreation.gov/docs),  
- [Kaggle "National Park Trails"](https://www.kaggle.com/datasets/planejane/national-park-trails)

## Installation
1. **Clone the repo** 
    - > Git clone 
        - Clone Link -> https://github.com/rafaelirangel/api.git

2. **Install dependencies**
    - > npm install express mongoose nodemon apidoc 

3. **Seed the data**
    - > Navigate into the lib file

        - > node db/seed.js 

4. **Start the server**
    - > Navigate into the repo file

        - > nodemon app.js || 
        - > node app.js

5. **Open in browser**
    - > http://localhost:3000/

6. **For documentation open the doc link**
    - > open ./docs/index.html



## Trails Endpoints 

| URL | PATH | METHOD | DESCRIPTION
| -------- | -------- | -------- | -------- |
| /trails | / | GET | List all items of trails |
| /trails/North Rim | /:cityName | GET |  Render Trails based on the City name |
| /trails/North Rim/Point Imperial | /:cityName/:name | GET | Render a specific trail by the Trail Name |
| /trails | / | PUT | Update num_reviews of all the trails |

## Tours Endpoints 
| URL | PATH | METHOD | DESCRIPTION |
| -------- | -------- | -------- | -------- |
| /tours | / | GET | List all items of Tours |
| /tours/Nature Tour | /:tourType | GET | Render all items that has a type of "Nature Tour" |
| /tours/Nature Tour/123 | /:tourType/:id | GET | Render all items that has a type of "Nature Tour" |
| /tours | / | POST | Create a new tour in the database |
| /tours/123 | /:tourType/:id | DELETE | Delete a tour |


## Campgrounds Endpoints 
|URL | PATH	| METHOD | DESCRIPTION |
| -------- | -------- | -------- | -------- |
| /campgrounds | / | GET | List all items of Campgrounds |
| /campgrounds/123 | /:id | GET | Render a single Campground |


## Parks Endpoints 
|URL | PATH	| METHOD | DESCRIPTION |
| -------- | -------- | -------- | -------- |
| /parks | /   |  GET | List all items of Parks |
| /parks/Adams | /:name | GET | Render a park based on its name |



## Database
The database was built using MondoDB, Mongoose and Node.js. This API is set up to do Full CRUD operations using GET, POST, PUT, and DELETE requests. The way I constructed it was by creating models in the lib/models folder and seeding it in the lib/db/seed.js file. Note that I used Axios to retrieve data from one of my API "NPS API"(Parks), and .Json to retrieve data from the other 3 models(Campground, Tours, Trails).

## Technology Used
MongoDB
Mongoose
Express.js
Node.js
