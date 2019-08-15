import React,{Component} from 'react';
import './App.scss';
import { LoginPage,RegisterPage,MainPage } from "./_pages";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import {PrivateRoute} from './_routes/privateRoute';
import {realtimeDate} from './_constants/other.constants';
import { on } from 'jetemit';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated : null
    }
    on('login',userData=>{
      realtimeDate.userData = userData;
      this.setState({isAuthenticated: true});
    })
  }

  render(){
    return <Router>
      <PrivateRoute path="/" isAuthenticated={this.state.isAuthenticated} exact component={MainPage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/register" exact component={RegisterPage}/>
    </Router>;
  }

}

export default App;
