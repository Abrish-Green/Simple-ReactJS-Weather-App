import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import redux , {createStore, applyMiddleware} from 'redux'
import ReduxPromise from '../node_modules/redux-promise/src'

import App from './component/app'
import Reducer from './reducer'


const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(<Provider store={storeWithMiddleware(Reducer)}>
        <App />
</Provider>,document.getElementById('root'))