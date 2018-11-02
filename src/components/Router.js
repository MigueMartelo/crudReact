import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './Header';
import Navegation from './Navegation';

class Router extends Component {
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

Router.propTypes = {
};

export default Router;