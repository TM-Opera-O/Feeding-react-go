package controllers

import (
	"context"
	"encoding/json"
	"feeding-backend/internal/models"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type SiloHandler struct {
	Collection *mongo.Collection
}

func (h *SiloHandler) GetSilos(w http.ResponseWriter, r *http.Request) {
	cursor, err := h.Collection.Find(context.TODO(), bson.M{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.TODO())

	var items []models.Silo
	if err := cursor.All(context.TODO(), &items); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(items)
}

func (h *SiloHandler) CreateSilo(w http.ResponseWriter, r *http.Request) {
	var item models.Silo
	if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	_, err := h.Collection.InsertOne(context.TODO(), item)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
