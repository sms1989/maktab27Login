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
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import { authenticationAction } from "../_actions";

const useStyles = makeStyles(theme =>({
    card: {
      width: 350,
    },
    textField: {
        width: '100%'
    },
    cardAction: {
        justifyContent: 'flex-end'
    },
    login:  {
        color: '#FFF'
    }
}));

const LoginPage = (props) => {

    const {dispatch,loginRequest} = props;

    const [values,setValues] = useState({
        login: '',
        password: ''
    })
    const [responseMessage,setResponseMessage] = useState(null);

    const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        
        dispatch(authenticationAction.login(values.login,values.password,props.history));
    }

    const handleClose = () =>{
        setResponseMessage(null);
    }


    return <div className="full-page exact center" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
        <Card className={classes.card}>
            <form onSubmit={submitHandler}>
                <CardContent>
                    <Typography variant="h6" component="h1" color="textSecondary" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        id="email"
                        label="Email"
                        name="login"
                        className={classes.textField}
                        value={values.login}
                        onChange={handleChange}
                        margin="normal"
                        type="email"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        name="password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange}
                        margin="normal"
                        type="password"
                    />
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button type="button" component={Link} to="/register" variant="outlined" size="small">Register</Button>
                    <Button type="submit" size="small" variant="contained" color="primary">{loginRequest ? 
                    <CircularProgress size={20} classes = {{colorPrimary: classes.login}}/>
                    : 'Login'}</Button>
                </CardActions>
            </form>
        </Card>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={!!responseMessage}
            autoHideDuration={6000}
            onClose={handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{responseMessage}</span>}
            action={[
            <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>,
            ]}
        />
    </div>
}

const mapStateToProps = state => {
    const {loginRequest} = state.authentication;
    
    return { loginRequest };
};

const ConnectedLoginPage = withRouter(connect(mapStateToProps)(LoginPage));
export {ConnectedLoginPage as LoginPage};