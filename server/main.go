package main

//fiber is express inspired web framework built on top of fasthttp

import (
	// "net/http"
	// "fmt"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

//create struct to define properties and types of values
type Todo struct {
	//id to identify each practice sheet
	// ID    int    `json:"id"`
	// Title string `json:"title"`
	// Done  bool   `json:"done"`
	// Body  string `json:"body"`
	
	// ID 		 int		`json:"id"`
    // Piece 	 string		`json:"piece"`
    // Number	 int		`json:"number"`
    // Plan	 string		`json:"plan"`
    // Developing string	`json:"developing"`
    // Refinement string	`json:"refinement"`
    // Memorize string		`json:"memorize"`
    // Perform string		`json:"perform"`
    // Memory string		`json:"memory"`
    // Renew string		`json:"renew"`
    // Technique string	`json:"technique"`
    // Musicianship string `json:"musicianship"`
    // Diction string		`json:"diction"` 

	Message string
}

func main() {
	
	//create new fiber server (fiber instance)
	app := fiber.New()

	//serving static file
	// app.Static("/", "../index.html")
	// app.Static("/", "../src/index.css")

	//cross origin resource sharing middleware, creating 
	//custom config

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:4000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	//assigning todos to the slice of the return type of todo. Slice
	//has variable length, so it can change. provides reference to an array.
	//continuous memory location.

	// todos := []Todo{}

	//creating get route handler, c is short for context parameter, 
	//contains information passed in request body
	app.Get("/", func(c *fiber.Ctx) error {
		fmt.Println("Invoked get endpoint")
		// return c.JSON("Hi John")
		return c.SendString("Hello from backend")
	})

	// app.Post("/api/todos", func(c *fiber.Ctx) error {
	// 	//
	// 	todo := &Todo{}

	// 	if err := c.BodyParser(todo); err != nil {
	// 		return err
	// 	}

	// 	todo.ID = len(todos) + 1

	// 	todos = append(todos, *todo)

	// 	return c.JSON(todos)

	// })

	// app.Patch("/api/todos/:id/done", func(c *fiber.Ctx) error {
	// 	id, err := c.ParamsInt("id")

	// 	if err != nil {
	// 		return c.Status(401).SendString("Invalid id")
	// 	}

	// 	for i, t := range todos {
	// 		if t.ID == id {
	// 			todos[i].Done = true
	// 			break
	// 		}
	// 	}

	// 	return c.JSON(todos)
	// })

	// app.Get("/api/todos", func(c *fiber.Ctx) error {
	// 	return c.JSON(todos)
	// })

	//if app.list throws error, invoke log.fatal
	log.Fatal(app.Listen(":4000"))

}