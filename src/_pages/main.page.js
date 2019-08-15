import React,{useState} from 'react';
import background from '../_images/background.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link,withRouter } from "react-router-dom";
import Axios from 'axios';
import {realtimeDate} from '../_constants/other.constants';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    title: {
        color: '#FFF'
    },
    
}));

const MainPage = (props) => {

    const classes = useStyles();

    return <div className="full-page" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
        <Typography variant="h1" color="textPrimary" classes={{colorTextPrimary: classes.title}}>
            Welcome
        </Typography>
        <Typography variant="h2" color="textPrimary" classes={{colorTextPrimary: classes.title}}>
            {realtimeDate.userData.name}
        </Typography>
    </div>
}
export {MainPage};