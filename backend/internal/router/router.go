package router

import (
	"feeding-backend/internal/controllers"
	"feeding-backend/internal/db"

	"github.com/gorilla/mux"
)

func NewRouter() *mux.Router {
	router := mux.NewRouter()

	// Handlers instanciados con sus respectivas colecciones
	lineaHandler := &controllers.LineaHandler{Collection: db.MongoClient.Database("feeding").Collection("lineas")}
	jaulaHandler := &controllers.JaulaHandler{Collection: db.MongoClient.Database("feeding").Collection("jaulas")}
	sopladorHandler := &controllers.SopladorHandler{Collection: db.MongoClient.Database("feeding").Collection("sopladores")}
	selectorHandler := &controllers.SelectorHandler{Collection: db.MongoClient.Database("feeding").Collection("selectores")}
	siloHandler := &controllers.SiloHandler{Collection: db.MongoClient.Database("feeding").Collection("silos")}
	alimentoHandler := &controllers.AlimentoHandler{Collection: db.MongoClient.Database("feeding").Collection("alimentos")}
	dosificadorHandler := &controllers.DosificadorHandler{Collection: db.MongoClient.Database("feeding").Collection("dosificadores")}
	calibracionHandler := &controllers.CalibracionHandler{Collection: db.MongoClient.Database("feeding").Collection("calibraciones")}
	biometriaHandler := &controllers.BiometriaHandler{Collection: db.MongoClient.Database("feeding").Collection("biometria")}
	alimentoEnSiloHandler := &controllers.AlimentoEnSiloHandler{Collection: db.MongoClient.Database("feeding").Collection("alimento_en_silo")}

	// Rutas REST
	router.HandleFunc("/lineas", lineaHandler.GetLineas).Methods("GET")
	router.HandleFunc("/lineas", lineaHandler.CreateLinea).Methods("POST")

	router.HandleFunc("/jaulas", jaulaHandler.GetJaulas).Methods("GET")
	router.HandleFunc("/jaulas", jaulaHandler.CreateJaula).Methods("POST")

	router.HandleFunc("/sopladores", sopladorHandler.GetSopladores).Methods("GET")
	router.HandleFunc("/sopladores", sopladorHandler.CreateSoplador).Methods("POST")

	router.HandleFunc("/selectores", selectorHandler.GetSelectores).Methods("GET")
	router.HandleFunc("/selectores", selectorHandler.CreateSelector).Methods("POST")

	router.HandleFunc("/silos", siloHandler.GetSilos).Methods("GET")
	router.HandleFunc("/silos", siloHandler.CreateSilo).Methods("POST")

	router.HandleFunc("/alimentos", alimentoHandler.GetAlimentos).Methods("GET")
	router.HandleFunc("/alimentos", alimentoHandler.CreateAlimento).Methods("POST")

	router.HandleFunc("/dosificadores", dosificadorHandler.GetDosificadores).Methods("GET")
	router.HandleFunc("/dosificadores", dosificadorHandler.CreateDosificador).Methods("POST")

	router.HandleFunc("/calibraciones", calibracionHandler.GetCalibraciones).Methods("GET")
	router.HandleFunc("/calibraciones", calibracionHandler.CreateCalibracion).Methods("POST")

	router.HandleFunc("/biometria", biometriaHandler.GetBiometrias).Methods("GET")
	router.HandleFunc("/biometria", biometriaHandler.CreateBiometria).Methods("POST")

	router.HandleFunc("/alimento-en-silo", alimentoEnSiloHandler.GetAlimentoEnSilos).Methods("GET")
	router.HandleFunc("/alimento-en-silo", alimentoEnSiloHandler.CreateAlimentoEnSilo).Methods("POST")

	return router
}
