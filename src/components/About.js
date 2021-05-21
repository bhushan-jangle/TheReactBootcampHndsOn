import React from "react"
import {Link,Switch,Route, useRouteMatch} from "react-router-dom"
import Info from "./Info"
import Profile from "./Profile"

function About(){
    const{url,path} = useRouteMatch();
    console.log(url,path);
    return(
        <div>
            <h3>
                About Page
            </h3>
            {/* <Link to={`/${url}/info`}>Info</Link><br></br>
            <Link to={`/${url}/profile`}>Profile</Link> */}
            <Link to={`/about/info`}>Info</Link><br></br>
            <Link to={`/about/profile`}>Profile</Link>

            <Switch>
                {/* <Route exact path={`/${path}/info`}> */}
                <Route exact path={`/about/info`}>
                    <Info/>
                </Route>
                {/* <Route path={`/${path}/profile`}> */}
                <Route path={`/about/profile`}>
                    <Profile/>
                </Route>
            </Switch>
        </div>
    )
}

export default About