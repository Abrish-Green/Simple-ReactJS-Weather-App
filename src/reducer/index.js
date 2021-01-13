import {combineReducers} from 'redux'
import WeatherDataReducer from './reducer_weather_data'
const root = combineReducers({
    weatherData : WeatherDataReducer
})

export default root