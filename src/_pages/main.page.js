import React,{useState} from 'react';
import background from '../_images/background.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

const useStyles = makeStyles(theme =>({
    title: {
        color: '#FFF'
    },
    
}));

const MainPage = ({user}) => {

    const classes = useStyles();

    return <div className="full-page" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
        <Typography variant="h1" color="textPrimary" classes={{colorTextPrimary: classes.title}}>
            Welcome
        </Typography>
        <Typography variant="h2" color="textPrimary" classes={{colorTextPrimary: classes.title}}>
            {user.name}
        </Typography>
    </div>
}

const mapStateToProps = state => {
    const {user} = state.authentication;
    return { user };
};
const ConnectedMainPage = connect(mapStateToProps)(MainPage);

export {ConnectedMainPage as MainPage};