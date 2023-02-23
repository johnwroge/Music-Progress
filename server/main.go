package main

//fiber is express inspired web framework built on top of fasthttp

import (
	// "net/http"
	
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	 "github.com/gofiber/fiber/v2/middleware/cors"
)

//create struct to define properties and types of values
type Todo struct {
	//id to identify each practice sheet
	
	ID 		 int		`json:"id"`
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

	//serving static files
	 app.Static("/", "./index.html")
	// app.Static("/", "../src/index.css")

	//cross origin resource sharing middleware, 
	//creating custom config

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	header := w.Header()
	header.Add("Access-Control-Allow-Origin", "*")

	//assigning todos to the slice of the return type of todo. Slice
	//has variable length, so it can change. provides reference to an array.
	//continuous memory location.

		// todos := []Todo{}

	//creating get route handler, c is short for context parameter, 
	//contains information passed in request body
	app.Get("/", func(c *fiber.Ctx) error {
		fmt.Println("Route Working")
		// err := c.SendString("API is working")
		return c.SendString("Working")
		// return c.JSON("Hi John")
		// return c.SendString("Hello from backend")
	})


	app.Get("/:userId", func(c *fiber.Ctx) error{return nil})
	
	app.Put("/:userId", func(c *fiber.Ctx) error{return nil})

	//if app.list throws error, invoke log.fatal
	log.Fatal(app.Listen(":4000"))

}