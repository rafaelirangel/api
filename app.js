import express from "express";
import hikingTrailsRouter from "./lib/routes/trails.js";
import tourRouter from "./lib/routes/tours.js";
import campgroundRouter from "./lib/routes/campgrounds.js";
import parksRouter from "./lib/routes/parks.js";
// import swaggerJsdoc from "./swagger.js";

const app = express()

//Middleware
app.use(express.json())

//routes
app.get('/', async (req, res) => {
    res.send(
        'Welcome to the The Natural Adventure API. It was inspired by my passion for nature and adventure.You can find information such as Hiking Trails, Campground, Parks and Tours (Nature, Historic and Cave Tours).'
        )
})

app.use('/trails', hikingTrailsRouter)

app.use('/tours', tourRouter)

app.use('/campgrounds', campgroundRouter)

app.use('/parks', parksRouter)

//Starting the server 
app.listen(3000, () => console.log('listening on port 3000')
// swaggerDocs(app)
) 