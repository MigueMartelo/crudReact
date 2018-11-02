import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Navegation from './Navegation';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Navegation />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
    
}

export default Router;