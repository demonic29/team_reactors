// Google App Script API
export const API = {
    GET_DATA:
        "https://script.google.com/macros/s/AKfycbyWnvO4knlOh5e1yJzgL2ZFSd8fWpKegnIGBIgmI-5xOVCD_-GTmS9XSwiesWFPV6jw/exec",
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
