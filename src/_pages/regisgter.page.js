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
import {HOST} from '../_constants/other.constants';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    card: {
      width: 350,
    },
    textField: {
        width: '100%'
    },
    cardAction: {
        justifyContent: 'flex-end'
    }
}));

const RegisterPage = (props) => {

    const [values,setValues] = useState({
        email: '',
        password: '',
        name: ''
    })

    const [responseMessage,setResponseMessage] = useState(null);

    const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const handleClose = () =>{
        setResponseMessage(null);
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await Axios({
                method: 'post',
                url: `${HOST}/users/register`,
                headers: {
                  'Content-Type': 'application/json',
                },
                data: values
            });
            if (response.status === 200){
                setResponseMessage("Your user successfully registered");
                props.history.push('/login');
            }
        } catch (error){
            setResponseMessage(error.response.data.message);
        }
    }


    return <div className="full-page exact center" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
        <Card className={classes.card}>
            <form onSubmit={submitHandler}>
                <CardContent>
                    <Typography variant="h6" component="h1" color="textSecondary" gutterBottom>
                        Register
                    </Typography>
                    <TextField
                        id="name"
                        label="Full Name"
                        name="name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        margin="normal"
                        type="email"
                        required
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
                        required
                    />
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button type="button" component={Link} to="/login" size="small" variant="outlined">Login</Button>
                    <Button type="submit" size="small" variant="contained" color="primary">Register</Button>
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
withRouter(RegisterPage);
export {RegisterPage};