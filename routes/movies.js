import express from "express";
import {getAllMovies,insertMovies,deleteMoviesById,getAllMoviesById,updateMovieById} from "../helper.js"

const router=express.Router();



router.get("/", async (request, response) =>  {

    if(request.query.rating){
        request.query.rating = +request.query.rating;
    }
   
    console.log(request.query)
    const movie = await getAllMovies(request);
    response.send(movie);
});


router.get("/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)

    const movie = await getAllMoviesById(id)
    
    console.log(movie)
    movie 
    ? response.send(movie) 
    : response.status(404).send({ message: "No movie found" });
});



//Delete a movie id

router.delete("/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)
    //db.movies.deleteOne({id: "102"})
    const movie = await deleteMoviesById(id)
    response.send(movie)
});
router.post("/", async (request, response) =>  {    
    
    const newMovies=request.body;
    
    //db.movies.findOne({id: "102"})
    const result = await insertMovies(newMovies)
    response.send(result)

});

router.put("/", async (request, response) =>  {    
    const{id}=request.params;
    const updateMovie=request.body;
    
    //db.movies.findOne({id: "102"})
    const result = await updateMovieById(updateMovie,id)
    response.send(result)

});

export const moviesRouter=router;