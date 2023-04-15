package configs
// imports required dependencies
import (
    "log"
    "os"
    "github.com/joho/godotenv"
)
/*
function that checks if the environment variable is correctly loaded and returns the 
environment variable, mongouri

*/
func EnvMongoURI() string {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }
    
    return os.Getenv("MONGOURI")
}