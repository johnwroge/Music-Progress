package main

import (
	// "net/http"
	// "fmt"
	"log"
  	"github.com/gofiber/fiber/v2"
  	// "github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/johnwroge/music-progress/configs"
	"github.com/johnwroge/music-progress/routes"
	// "github.com/lib/pq"
	// "github.com/joho/godotenv"
)

//create struct to define properties and types of values


func main() {
	
	//create new fiber server (fiber instance)
	app := fiber.New()
	
	configs.ConnectDB()
	
	// app.Use(cors.New(cors.Config{
	// 	AllowHeaders: "Origin, Content-Type, Accept",
	// 	AllowCredentials: true,
    //     AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	// }))

	
	routes.UserRoute(app)

	//serving static files
	// app.Static("/", "index.html")
	// app.Static("/", "../src/index.css")	

	// app.Get("/api", func(c *fiber.Ctx) error {
	// 	fmt.Println("Get Route Working")
	// 	return c.JSON("result")
	// })
	
	// //post route handler, to store relevant practice sheets in db
	//  app.Post("/api", func(c *fiber.Ctx) error {
	// 	fmt.Println("Post Route Working")
	// 	todo := new(Todo)
	// 	//error handler
	// 	if err := c.BodyParser(todo); err != nil {
	// 		fmt.Println("error = ",err)
	// 		return c.Status(400).SendString(err.Error())
	// 	}
	// 	//these both return the todo
	// 	 return c.Status(200).JSON(todo)
	// 	//  return c.Send(c.Body())
	//  })

	//  //route handler to replace specified fields in database
	//  app.Patch("/api", func(c *fiber.Ctx) error {
	// 	fmt.Println("Patch Route Working")
	// 	return c.JSON("Data change confirmation")
	//  })

	
	//if app.list throws error, invoke log.fatal
	log.Fatal(app.Listen(":4000"))
}