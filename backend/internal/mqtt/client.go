package mqtt

import (
	"log"
	"os"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

// StartSubscriber conecta al broker MQTT y pasa topic + mensaje al callback
func StartSubscriber(onMessage func(topic string, message []byte)) {
	broker := os.Getenv("MQTT_BROKER")
	clientID := os.Getenv("MQTT_CLIENT_ID")
	topic := os.Getenv("MQTT_TOPIC")
	username := os.Getenv("MQTT_USER")
	password := os.Getenv("MQTT_PASS")

	opts := mqtt.NewClientOptions()
	opts.AddBroker(broker)
	opts.SetClientID(clientID)
	opts.SetUsername(username)
	opts.SetPassword(password)
	opts.SetDefaultPublishHandler(func(client mqtt.Client, msg mqtt.Message) {
		log.Printf("📩 [Handler default] %s: %s", msg.Topic(), msg.Payload())
	})

	client := mqtt.NewClient(opts)

	log.Println("🔌 Conectando a broker:", broker)
	if token := client.Connect(); token.Wait() && token.Error() != nil {
		log.Fatal("❌ Error conectando al broker MQTT:", token.Error())
	}

	log.Println("✅ Conectado a MQTT:", broker)

	// Suscribirse al tópico
	if token := client.Subscribe(topic, 0, func(client mqtt.Client, msg mqtt.Message) {
		log.Printf("📡 Mensaje en tópico %s: %s\n", msg.Topic(), msg.Payload())
		onMessage(msg.Topic(), msg.Payload()) // <-- usamos topic + mensaje
	}); token.Wait() && token.Error() != nil {
		log.Fatal("❌ Error suscribiendo al tópico:", token.Error())
	}

	log.Println("✅ Suscripción exitosa al tópico:", topic)
}
