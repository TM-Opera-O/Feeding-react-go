package db

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoClient *mongo.Client

func Connect() {
	uri := os.Getenv("MONGO_URI")
	clientOptions := options.Client().ApplyURI(uri)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var err error
	MongoClient, err = mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("❌ Error al conectar a MongoDB:", err)
	}

	err = MongoClient.Ping(ctx, nil)
	if err != nil {
		log.Fatal("❌ Error al hacer ping a MongoDB:", err)
	}

	fmt.Println("✅ Conectado a MongoDB")
}

func GetCollection(name string) *mongo.Collection {
	dbName := os.Getenv("MONGO_DB")
	return MongoClient.Database(dbName).Collection(name)
}
