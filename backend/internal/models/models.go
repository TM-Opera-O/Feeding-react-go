package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Línea de alimentación
type Linea struct {
	ID     string `json:"id" bson:"_id"`
	Nombre string `json:"nombre" bson:"nombre"`
}

// Jaula (configuración física y parámetros operativos)
type Jaula struct {
	ID              primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	IDLinea         string             `bson:"id_linea" json:"id_linea"`
	IDDosificador   string             `bson:"id_dosificador" json:"id_dosificador"`
	Nombre          string             `bson:"nombre" json:"nombre"`
	SalidaSelector  int                `bson:"posicion_selectora" json:"posicion_selectora"`
	Prioridad       int                `bson:"prioridad" json:"prioridad"`
	Tasa            int                `bson:"tasa" json:"tasa"`
	TiempoSoplado   int                `bson:"tiempo_soplado" json:"tiempo_soplado"`
	HZSoplador      int                `bson:"hz_soplador" json:"hz_soplador"`
	FactorActividad int                `bson:"factor_act" json:"factor_act"`
	Habilitada      bool               `bson:"seleccionada" json:"seleccionada"`
}

// Biometría actual por jaula
type Biometria struct {
	ID              primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	JaulaID         primitive.ObjectID `bson:"jaula_id" json:"jaula_id"`
	PesoPromedio    float64            `bson:"peso_promedio" json:"peso_promedio"` // gramos
	CantidadPeces   int                `bson:"cantidad_peces" json:"cantidad_peces"`
	FactorCondicion float64            `bson:"factor_condicion" json:"factor_condicion"` // FCR
	TallaPromedio   float64            `bson:"talla_promedio" json:"talla_promedio"`     // cm
	FechaRegistro   primitive.DateTime `bson:"fecha_registro" json:"fecha_registro"`
}

// Soplador (motor de aire para distribución)
type Soplador struct {
	ID       string `json:"id" bson:"_id"`
	Estado   string `json:"estado" bson:"estado"` // Ej: "activo", "detenido"
	MaxHertz int    `json:"max_hertz" bson:"max_hertz"`
}

// Selector de jaulas (válvula giratoria)
type Selector struct {
	ID           string `json:"id" bson:"_id"`
	Tipo         string `json:"tipo" bson:"tipo"` // Ej: "rotatorio"
	TotalSalidas int    `json:"total_salidas" bson:"total_salidas"`
}

// Silo (contenedor físico de alimento)
type Silo struct {
	ID        string `json:"id" bson:"_id"`
	Nombre    string `json:"nombre" bson:"nombre"`
	Capacidad int    `json:"capacidad" bson:"capacidad"` // en kilos
}

// Tipo de alimento
type Alimento struct {
	ID       string `json:"id" bson:"_id"`
	Tipo     string `json:"tipo" bson:"tipo"` // Ej: "pellet", "harina"
	Nombre   string `json:"nombre" bson:"nombre"`
	PelletKg int    `json:"pellet_kg" bson:"pellet_kg"` // pellets por kilo
	Medicado bool   `json:"medicado" bson:"medicado"`
}

// Relación entre silo y alimento
type AlimentoEnSilo struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	SiloID     primitive.ObjectID `bson:"silo_id" json:"silo_id"`
	AlimentoID primitive.ObjectID `bson:"alimento_id" json:"alimento_id"`
	Cantidad   int                `bson:"cantidad" json:"cantidad"` // en kilos
}

// Dosificador (dosifica alimento hacia el soplador)
type Dosificador struct {
	ID         string `json:"id" bson:"_id"`
	Linea      string `json:"linea" bson:"linea"`
	TasaMaxima int    `json:"tasa_maxima" bson:"tasa_maxima"` // gramos por segundo
}

// Calibración (puede vincularse a dosificador o sistema completo)
type Calibracion struct {
	ID      string `json:"id" bson:"_id"`
	Detalle string `json:"detalle" bson:"detalle"`
}
