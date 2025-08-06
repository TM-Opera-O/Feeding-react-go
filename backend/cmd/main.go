package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"feeding-backend/internal/db"
	"feeding-backend/internal/mqtt"
	"feeding-backend/internal/router"
	"feeding-backend/internal/ws"

	"github.com/joho/godotenv"
)

func main() {
	// Cargar variables de entorno desde .env
	err := godotenv.Load("../.env")
	if err != nil {
		log.Println("⚠️ No se pudo cargar el archivo .env, usando variables del sistema")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("🚀 Iniciando servidor en puerto", port)

	// Conexión a MongoDB
	db.Connect()

	// Inicializar WebSocket hub
	hub := ws.NewHub()
	go hub.Run()

	// Crear router principal (REST + WebSocket)
	mainRouter := router.NewRouter()

	// Endpoint WebSocket directo
	mainRouter.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		ws.ServeWS(hub, w, r)
	})

	// Suscripción MQTT
	mqtt.StartSubscriber(func(topic string, message []byte) {
		log.Printf("📩 [%s] Mensaje recibido del PLC: %s\n", topic, message)

		// Reenviar al frontend con formato { topic, payload }
		formatted := fmt.Sprintf(`{"topic":"%s","payload":%s}`, topic, string(message))
		hub.Broadcast([]byte(formatted))
	})

	// Iniciar servidor HTTP
	log.Println("✅ Servidor HTTP listo en http://localhost:" + port)
	err = http.ListenAndServe(":"+port, mainRouter)
	if err != nil {
		log.Fatal("❌ Error al iniciar el servidor:", err)
	}
}
