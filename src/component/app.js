import React from 'react'
import SearchBar from '../container/search_bar'
import DisplayWeather from '../container/display_weather'
export default class App extends React.Component{

   

    render(){
        return(
            <div className='App'>
                <SearchBar />
                <DisplayWeather />
            </div>
        )
    }
}