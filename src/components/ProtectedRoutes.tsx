/* eslint-disable no-useless-rename */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

import {Route,Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps  {
    isAuth: boolean;

  };
const ProtectedRoutes = ({isAuth,...routeProps}:Props) => {

    if (isAuth) {
        return <Route {...routeProps}/>
    }
  return <Redirect to ="/login"/>
}

export default ProtectedRoutes
