// Google App Script API
export const API = {
	GET_DATA:
		"https://script.google.com/macros/s/AKfycbybkIo90HLDXNUq5Y9ldWVifRtXghXSD1_AyH4-9z95ZEtEwm68BMY-Tl_spMerfFKM/exec",
};

/**
 * -------------------------------------------------------
 * Add action parameter to API GET_DATA to get desired data
 * 	Action List:
 * 	-getTour
 * 	-getGeneral
 * 	-getSlide
 * 	-getNote
 * 	-getAbout
 * 	-getFooter
 * example: `${API.GET_DATA}?action=getTour`
 * -------------------------------------------------------
 * Add deleteId to delete value from id of updateId to update new value at id value
 * example: `${API.GET_DATA}?action=getTour&deleteId=${id}`* 
 * -------------------------------------------------------
 * 
 */
