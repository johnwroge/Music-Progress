package configs

import (
    "context"
    "fmt"
    "log"
    "time"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    // "go.mongodb.org/mongo-driver/bson"
)

type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var Mg MongoInstance

//storing database name in variable
const dbName = "Cluster0"
   
 var mongoURI  = EnvMongoURI();

//function that configured client to use the correct URI and check for any errors. 
func ConnectDB() *mongo.Client  {
   
    
    client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))

    if err != nil {
        log.Fatal(err)
    }  
    
    
	// timeout of 10 seconds
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    err = client.Connect(ctx)
    db := client.Database(dbName)
    
    if err != nil {
        log.Fatal(err)
    }

     Mg = MongoInstance{
		Client: client,
		Db:     db,
	}
     
    fmt.Println("Connected to MongoDB")
	return client
}




// Client instance, used when we create collections
var DB *mongo.Client = ConnectDB()

//getting database collections, to retrieve and collect collections 
func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
    collection := client.Database("Cluster0").Collection(collectionName)
    return collection
}