import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';
import BaseMap from './components/BaseMap/BaseMap';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


const App = () => {

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
            <Navbar />
            <Switch>
                <Route path="/map" exact component={BaseMap} />
            </Switch>  
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>

        </BrowserRouter>
    )

}

export default App;