package configs

import (
    "context"
    "fmt"
    "log"
    "time"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

//function that configured client to use the correct URI and check for any errors. 
func ConnectDB() *mongo.Client  {
    
    // const dbName = "go-fiber-cluster"
    // var mongoURI = EnvMongoURI() + dbName; 


    // client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
    client, err := mongo.NewClient(options.Client().ApplyURI(EnvMongoURI()))
    if err != nil {
        log.Fatal(err)
    }
	//timeout of 10 seconds
    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }

    //ping the database to check for connection
    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connected to MongoDB")
    return client
}

// Client instance, used when we create collections
var DB *mongo.Client = ConnectDB()

//getting database collections, to retrieve and collect collections 
func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
    collection := client.Database("go-fiber-cluster").Collection(collectionName)
    return collection
}