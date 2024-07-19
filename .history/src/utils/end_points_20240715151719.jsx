// Google App Script API
export const API = {
	GET_DATA:
		"https://script.google.com/macros/s/AKfycbzOSIFIbV-Ew0bpoGnmsZoQhl4txvxSkZc6ekMywDUvIJ5929eM7GbCXnTZVdtenDXx/exec",
};

/**
 * Add action parameter to API GET_DATA to get desired data
 * -------------------------------------------------------
 * Action List:
 * -getTour
 * -getGeneral
 * -getSlide
 * -getNote
 * -getAbout
 * -getFooter
 * -------------------------------------------------------
 * example: `${API.GET_DATA}?action=getTour`
 */
