/* eslint-disable no-console */
import React, {useEffect, useState} from "react";
import {  Route,BrowserRouter as Router, Switch  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';
import {  ToastContainer } from 'react-toastify';

// // import IUser from './types/user.type';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import axios from "axios";
import RecipeSearch from "./components/RecipeSearch";
import ProtectedRoutes from "./components/ProtectedRoutes";


const App: React.FC = () => {

  // eslint-disable-next-line no-unused-vars
  const [authorized,setAuthorized]=useState(false);
  // const user=JSON.parse(localStorage.getItem('user')!);
  let boolValue = JSON.parse(localStorage.getItem('isAuth')!); 
  // const url = "https://recepiv1.herokuapp.com/secure/user";
  
  // if (!localStorage.getItem('isAuth') ) {
  //   setAuthorized(false);
  // }


  // const config = {
  //   headers:{
  //     Authorization: user.jwt,
    
  //   }
  // };
    useEffect(() => {
      // console.log(user.jwt);
     
      if(boolValue===null){
        boolValue=false;
      }
      
     
     
      
         
    },[])
  
  



  return (

    <Router>
      <Header authorized={boolValue } />
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <main>
        <Container>
          <Switch>
          <Route path="/" exact component={Home}/>
          <ProtectedRoutes isAuth={boolValue} path="/home" component={RecipeSearch} />
          <Route path="/login" exact component={()=><Login setAuthorized={setAuthorized} />}/>
          <Route path="/singup" exact component={Register}/>
          </Switch>
        </Container>

      </main>
      <Footer />
    </Router>


    //  <BrowserRouter>

    //     <div className="container mt-3">
    //       <Switch>
    //         <Route exact path={["/", "/home"]} component={Home} />
    //         <Route exact path="/login" component={Login} />
    //         <Route exact path="/register" component={Register} />

    //       </Switch>
    //     </div>

    //     </BrowserRouter>
  );
};

export default App;