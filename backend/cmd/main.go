package main

import (
	"feeding-backend/internal/db"
	"feeding-backend/internal/mqtt"
	"feeding-backend/internal/router"
	"feeding-backend/internal/ws"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Cargar archivo .env
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

	// WebSocket hub
	hub := ws.NewHub()
	go hub.Run()

	// Crear router principal con rutas REST y WS
	mainRouter := router.NewRouter() // Usa tu nuevo enrutador modular

	// WebSocket endpoint manual (si no está incluido en NewRouter)
	mainRouter.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		ws.ServeWS(hub, w, r)
	})

	// MQTT suscripción
	mqtt.StartSubscriber(func(message []byte) {
		log.Printf("📩 Mensaje recibido del PLC: %s\n", message)
		hub.Broadcast(message)
	})

	// Iniciar servidor
	log.Println("✅ Servidor HTTP listo en http://localhost:" + port)
	err = http.ListenAndServe(":"+port, mainRouter)
	if err != nil {
		log.Fatal("❌ Error al iniciar el servidor:", err)
	}
}
