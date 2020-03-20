import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https.....'
})

class App extends Component {
    state = {
        hello: null
    };

    componentDidMount() {
        // axiosInstance.get('/posts')
        axios.get('./hello')
            .then(res => this.setState({ hello: res.data }))
            .catch(err => console.log(err))
        // this.asyncFunction();
    }

    // asyncFunction = async () => {
    //     await fetch('./hello')
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    // }

    render() {

        return (
            <div>
                {
                    this.state.hello ? <div> {this.state.hello} </div>
                        : null
                }

            </div>
        );
    }
}

export default App;
