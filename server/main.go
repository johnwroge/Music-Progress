package main

//fiber is express inspired web framework built on top of fasthttp

import (
	// "net/http"
	// "log"
	"fmt"
	"log"

  "github.com/gofiber/fiber/v2"
  "github.com/gofiber/fiber/v2/middleware/cors"
)

//create struct to define properties and types of values
type Todo struct {
	//id to identify each practice sheet
	
	// ID 		 int		`json:"id"`
    Piece 	 string		`json:"piece"`
    Number	 int		`json:"number"`
    Plan	 string		`json:"plan"`
    // Developing string	`json:"developing"`
    // Refinement string	`json:"refinement"`
    // Memorize string		`json:"memorize"`
    // Perform string		`json:"perform"`
    // Memory string		`json:"memory"`
    // Renew string		`json:"renew"`
    // Technique string	`json:"technique"`
    // Musicianship string `json:"musicianship"`
    // Diction string		`json:"diction"` 


}

func main() {
	
	//create new fiber server (fiber instance)
	app := fiber.New()


	app.Use(cors.New(cors.Config{
		//AllowOrigins: "http://localhost:3000",
		// AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		
		// Access-Control-Allow-Origin: http://localhost:5173
		AllowCredentials: true,
        AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))
	//serving static files
	app.Static("/", "index.html")
	// app.Static("/", "../src/index.css")

	//cross origin resource sharing middleware, 
	//creating custom config


	//assigning todos to the slice of the return type of todo. Slice
	//has variable length, so it can change. provides reference to an array.
	//continuous memory location.

	 todos := []Todo{}

	//creating get route handler, c is short for context parameter, 
	//contains information passed in request body
	app.Get("/api", func(c *fiber.Ctx) error {
		fmt.Println("Get Route Working")
	  	

		return c.JSON("result")
	})



	//post route handler, to store relevant practice sheets in db
	 app.Post("/api", func(c *fiber.Ctx) error {
		fmt.Println("Post Route Working")
	
		// todo := &Todo{}	
		todo := new(Todo)
	

		if err := c.BodyParser(todo); err != nil {
			fmt.Println("error = ",err)
			return c.SendStatus(200)
		}

		// todos = append(todos, *todo)
	
		// getting user if no error
		fmt.Println("user = ", todo)
		fmt.Println("user = ", todo.Piece)
		fmt.Println("user = ", todo.Number)



		return c.JSON(todos)
	 })

	 //route handler to replace specified fields in database
	 app.Patch("/api", func(c *fiber.Ctx) error {
		fmt.Println("Patch Route Working")

		return c.JSON("Data change confirmation")
	 })



	//if app.list throws error, invoke log.fatal
	log.Fatal(app.Listen(":4000"))
}