package main

import (
	"fmt"
	"net/http"

	"feeding-backend/database"

	"github.com/gin-gonic/gin"
)

func main() {
	database.ConnectMongo()

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})

	fmt.Println("Servidor corriendo en http://localhost:8080")
	r.Run(":8080")
}
