import React from "react"
import {Navbar,Nav} from "react-bootstrap"
import {Link,Switch,Route} from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function Header(){
    return(
            <>
                <Navbar bg="dark" variant="dark">
                &nbsp;&nbsp;<Link to={`/`}>Pic Some</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/Cart`}>Cart</Link>
                </Navbar>
                <Switch>
                    <Route exact path={`/`}><Photos/></Route>
                    <Route path={`/Cart`}><Cart/></Route>
                </Switch>
            </>
    )
}

export default Header