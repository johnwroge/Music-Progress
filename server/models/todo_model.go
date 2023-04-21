package models

type Todo struct {
	// ID 		 int		`json:"id"`
    Piece 	 string		`json:"piece"`
    Number	 string		`json:"number"`
    Plan	 string		`json:"plan"`
    Developing string	`json:"developing"`
    Refinement string	`json:"refinement"`
    Memorize string		`json:"memorize"`
    Perform string		`json:"perform"`
    Memory string		`json:"memory"`
    Renew string		`json:"renew"`
    Technique string	`json:"technique"`
    Musicianship string `json:"musicianship"`
    Diction string		`json:"diction"` 
}