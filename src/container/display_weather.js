import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchWeather } from '../actions'

import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';
import _ from 'lodash'


const Chart = (props)=>{
  
        return(
            <div>
                <Sparklines  data={props.data}>
                    <SparklinesLine key={props.avg} color={props.color} />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
               <div>
                   {props.avg} {props.unit}
               </div>
            </div>      
        )
    
}

 class DisplayWeather extends Component{


    constructor(props){
        super(props)
        this.resultRender = this.resultRender.bind(this)
        this.average = this.average.bind(this)
    }
   average(data){
        return _.round((_.sum(data)/data.length))
   }
    resultRender(item){
                    if(item.data != undefined){
                        const countryIcon = `https://www.countryflags.io/${item.data.city.country}/shiny/64.png`
                        
                        console.log(item)
                        const temp = (item.data.list.map(weather => weather.main.temp))
                        const pressure = (item.data.list.map(weather => weather.main.pressure))
                        const humidity = (item.data.list.map(weather => weather.main.humidity))
                            return(
                                <tr key={item.data.city.id}>
                                    <th scope="row">
                                    <img src={countryIcon}></img>
                                    <span>{item.data.city.name}</span>
                                    </th>
                                    <td>
                                        <Chart data={temp} color={'red'} avg={this.average(temp)} unit={'K'}/>
                                    </td>
                                    <td>
                                        <Chart data={pressure} color={'yellow'} avg={this.average(pressure)} unit={'hPa'}/>
                                    </td>
                                    <td>  
                                        <Chart data={humidity} color={'blue'} avg={this.average(humidity)} unit={'%'}/>
                                    </td>
                                </tr>
                            )
                    }
                    
                    
                   
    }

     render() {
         console.log(this.props)
         if (this.props.weatherData) {
             return (
                    <div className="container">
                        <div className="col-md-10">
                            <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                        <th scope="col">City</th>
                                        <th scope="col">Temprature (K)</th>
                                        <th scope="col">Pressure (hPa)</th>
                                        <th scope="col">Humidity (%)</th>
                                        </tr>
                                </thead>
                                <tbody>
                                 {  this.props.weatherData.map((item)=>{
                                     return this.resultRender(item)
                                     })
                                 }
                                </tbody>
                            </table>

                        </div>
                    </div>
                )
         } else {
             return 's'
        }
    }
}


function mapStateToProps(state) {
    return {
        weatherData: state.weatherData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather:fetchWeather},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayWeather)