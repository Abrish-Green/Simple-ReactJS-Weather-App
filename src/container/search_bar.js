import React,{Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchWeather } from '../actions'


class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            search_word:''
        }
        this.onTyping = this.onTyping.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    onTyping(event){
        this.setState({search_word:event.target.value})
        
    }
    onSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.search_word);
    }

    render(){
        return (
            <div className="container">
                <div className="col-md-6">
                        <form className="search-form" onSubmit={this.onSubmit}>
                            <div className="input-group md-form form-sm form-2 pl-0">
                                <input className="form-control my-0 py-1 lime-border" type="text" onInput={this.onTyping} placeholder="Search" aria-label="Search" />
                                  
                                </div>
                        </form>
                </div>

            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)