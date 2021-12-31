import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import catchlogo from './images/catch.png';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const loc = navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    });

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar}position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">CatchMaps</Typography>
                <img src={catchlogo} alt="catchlogo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )

}

export default App;