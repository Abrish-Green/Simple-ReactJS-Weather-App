import axios from 'axios'
const KEY = '4d7b6c46c0b3ceba9b78e74c331ca3a3'

export const FORECAST_TYPE = 'FORECAST_TYPE'

export function fetchWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
    const request = axios.get(url)

    return {
        type: FORECAST_TYPE,
        payload: request
    }
}
