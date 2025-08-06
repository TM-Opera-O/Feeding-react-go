package controllers

import "feeding-backend/internal/ws"

var WSHub *ws.Hub

func SetWSHub(h *ws.Hub) {
	WSHub = h
}
