package main

import (
	"html/template"
	"log"
	"net/http"
)

// Page model
type Page struct {
	Title string
	Body  []byte
}

var templates = template.Must(template.ParseFiles("trip.html"))

func main() {
	http.HandleFunc("/reports/", tripHandler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	err := templates.ExecuteTemplate(w, tmpl, p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func tripHandler(w http.ResponseWriter, r *http.Request) {
	p := &Page{Title: "trip", Body: []byte("hello there")}
	renderTemplate(w, "trip.html", p)
}
