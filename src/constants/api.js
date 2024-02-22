const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const API_KEY = "CN56ELQJ323Q6MA2VRR5FYH2T";
const ADDITIONAL_API_KEY = "QWXCL3425DHRFYN2A8TED8KQJ";

const API_OPTIONS = `?unitGroup=metric&include=days&elements=datetime,tempmax,tempmin,icon&iconSet=icons2&key=${API_KEY}&contentType=json`;

const TODAY_API_OPTIONS = `/today?unitGroup=metric&include=days&elements=datetime,temp,icon&iconSet=icons2&key=${API_KEY}&contentType=json`;

export { API_URL, API_OPTIONS, TODAY_API_OPTIONS };
