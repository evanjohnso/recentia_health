import React from "react";
// import { Link, Switch, Route } from 'react-router-dom';

import Registration from '../Registration'


class Button extends React.Component{
  render(){

    function switchToRegistration(e){
      e.preventDefault();
      alert("Clicked");
    }
      // const switchToRegistration = () =>(
      //   <div>
      //     <Switch>
      //       <Route exact path='../Registration' component={Registration}/>
      //     </Switch>
      //   </div>

      

    return (
      <button onClick= {switchToRegistration}> Create New Account</button>
  )
  }
}
export default Button;
