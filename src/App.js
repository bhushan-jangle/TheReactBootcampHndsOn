import './App.css';
import NewJsFeature from "./components/NewJsFeature"
import Child from "./components/Child"
import Card from "./components/Card"
import Children from "./components/Children"
import Callout from "./components/Callout"
import {ExtraPopsAddedHOC} from "./components/ExtraPopsAddedHOC"
import {WithFavoriteNum} from "./components/WithFavoriteNum"
import Menu from "./components/Menu"
import Example from "./components/Example"
import Details from "./components/Details"
import DataFetcher from "./components/DataFetcher"
import StateCounter from "./components/StateCounter"
import ThemeHeader from "./components/ThemeHeader"
import CommonContext from "./components/CommonContext"
import Header from "./components/Header"
import Button from "./components/Button"
import Form from "./components/Form"
import Effect from "./components/Effect"
import SpeedGame from "./components/SpeedGame"
import UseRefEx from "./components/UseRefEx"
import { ThemeContext } from './components/ThemeContext';
import CounterApp from "./components/CounterApp"
import {Link, Switch, Route, Router} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Info from "./components/Info"
import Profile from "./components/Profile"
import Services from "./components/services/ServicesList"
import ServicesDetail from './components/services/ServicesDetail';
import HeaderCS from "./components/capstone/Header"
import {ContextProvider} from "./components/capstone/Context"

//for redux
import {connect} from "react-redux"
import {increment, decrement} from "./redux/ReduxInReact"
import {useSelector, useDispatch} from "react-redux"

function App(props) {

  //for react redux using Hook
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* [Topic 1 - Introduction]
      [lesson -1.1 -setting-the-stage-with-modern-javascript-features] */}
      {/* <NewJsFeature/> */}

      {/* [lesson -1.2 -React.Fragment]  */}
      {/* <Child/> */}

      {/* [lesson -1.3,1.4 -Default Props, Props Types]  */}
      {/* React Docs on PropTypes:
      https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes */}
      {/* <Card cardColor="red" cardWidth={200} cardHeight={200}/>
      <Card cardColor="green"/>
      <Card cardColor="blue"/>
      <Card cardColor={10}/> */}

      {/* [Topic 2 - Reusability]
      [lesson -2.2 -React-children] */}
      {/* <Children>
            <h3>This is children component</h3>
            <p>this is paragraph</p>
      </Children>
      <Children>
        <form action="">
          <input type="text" placeholder="enter your name"/><br /><br />
          <button>submit</button>
        </form>
      </Children> */}

      {/* [lesson -2.3 -React-children-challenge] */} 
      {/* <h3>Welcome!!!</h3>
      <Callout>
        <p>this is paragraph...this is paragraph...this is paragraph...</p>
      </Callout>

      <p>some content here...</p>

      <Callout>
        <img src="https://static.remove.bg/remove-bg-web/a72f919da581145bc8a52ac0c5d21f5c4741f367/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" alt="" />
        <p>this is paragraph...this is paragraph...this is paragraph...</p>
      </Callout>
      <p>some content here...</p>
      <p>some content here...</p>
      <p>some content here...</p> 
      <Callout>
        <form action="">
          Name: <input type="text" /><br /><br />
          Address: <input type="text" /> <br /><br />
          <button>Submit</button>
        </form>
      </Callout> */}

      {/* [lesson -2.2 -React-HOC] */}
      {/* //HOC- A function that takes a component as a first argument and retuen a new component that
      //wraps the given component, providing extra capability it */}
      {/* {console.log(props)}
      <h3>{props.anotherProp}</h3>  */}

      {/* [lesson -2.3 -React-HOC challenge] */}
      {/* <h3>{props.favNumber}</h3> */}

      {/* [lesson -2.4 -React-HOC challenge] */}
      {/*  first trying without HOC example */}
      {/* <Menu/> */}

      {/* Implement Menu (Toggler) component using Higher Order Component*/}

      {/* [lesson -2.9 -Render Props part-2] */}
      {/* <Example render={function(num){
        return (
          <h3>
            Hello {num>0?"+ve Number" : "-ve Number"}
          </h3>
          )
        }}/> */}

        {/* [lesson -2.10 -Render Props- part-3] 
          create hide show Details using render props instead of HOC
        */}
        {/* <Details/> */}

        {/* [lesson -2.11 -Render Props- challenge] 
         //making a small app if data is loading then show Loading... 
         else show result data using render props feature
        */}
        {/* <DataFetcher url="https://jsonplaceholder.typicode.com/todos/1" render={function(isloading, data){
          return(
            <div>
              <h3>{isloading?"isLoading...":JSON.stringify(data)}</h3>
              {console.log(data)}
            </div>
          )
        }}/> */}

        {/* [lesson -3.1 -Performance - shallow comparision] 
          //shallow comparision is same as the === (tripal equal to) 
          it is equal for string , number and bool based on its value
          but for object and array it not based on value it also check it memory address
          if even same value array and number it result not equal
        */}
        {/* <ShallowComp /> */}

         {/* [lesson -3.2 -Performance - shouldComponentUpdate()] 
         shouldComponentUpdate method avoid unnecessary renderring if state is not change
         //it is checking prevProps with nextProps and prevState with nextState*
         //this return true for component render
         /}

          {/* if state pass to child component or not it still rerender child component
            shouldComponent help to resolve this problem
          */}
        {/* <StateCounter/> */}

        {/* [lesson -3.2 -Performance - Pure Component] */}
        {/* //it is better than used shouldComponentUpdate method 
        //just we need replace Component to PureComponent keyword */}
        
        {/* [lesson -3.3 -Performance - useMemo- for a functional component same as PureComponent] 
          it is checking only prevProps with nextProps (no state checking)
          //this return true for component not to be render
        */}

        {/* [lesson -4.4 -Context - React Context -Challenge] 
        // context is used to pass data between sibling component sending data using props is more tricky way
        //context has two properties provider and counsumer
        //parent component wrap inside context.Provider
        // and sibling component (that need data) wrap inside context.Consumer
        */}
        {/* <CommonContext.Provider value={"Nayan"}>
            <ThemeHeader/>
        </CommonContext.Provider> */}

        {/* [lesson -4.8 -Context - React changing context -Challenge] */}
        {/* changing theme using context */}
        {/* <Header/>
        <Button/> */}

        {/* [lesson -5.4 -Hook - React useState part-3 -Challenge - form Handling] */}
        {/* <Form/> */}

        {/* [lesson -5.5 -Hook - React useEffect ] */}
        {/* <Effect/> */}

        {/* [lesson -5.5 -Hook - SPEED TYPING GAME ] */}
        {/* <SpeedGame/> */}
                
        {/* [lesson -5.14 -Hook - useRef -  ] 
          useRef used for providing unique ref id to html dom element 
          instead of setting hardcoded id - because of reusability hardcoded id also reused
          useRef has lots of functionality it also help to focus on input area
        */}
        {/* <UseRefEx/> */}

        {/* [lesson -5.17 -Hook - useContext ] */}
        {/* <div>
          <Header/>
          <Button/>
        </div> */}
        
        {/* [lesson -5.18 -Hook - useContext ] */}
        {/* //custom hook practice */}
        {/* <CounterApp/> */}

        {/* [lesson -6.1 -React-Router  ] 
          it conditionaly renders large parts of your page
          declarative API
          Hooks

          primary components
          1) Routers - <BrowserRouter>, <HashRouter>
          2) Route Matchers - <Route>, <Switch>
          3) Navigation - (Route changers) <Link>, <NavLink>, <Redirect>

          * IT provides Hooks
          1) useHistory 2) useParam 3) useLocation

          {/* [lesson -6.5 -React Router Challenge ] */}
          {/* <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/services">Services</Link><br/>
          <Link to="/contact">Contact</Link><br/>

          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/services"><Services/></Route>
            <Route exact path="/services/:serviceId"><ServicesDetail/></Route>
            <Route exact path="/contact"><Contact/></Route>
            <Route exact path="/about/info">
                    <Info/>
                </Route>
                <Route path="/about/profile">
                    <Profile/>
                </Route>
          </Switch> */}

          {/* [lesson -7.0 -React Capstone project ] */}
            {/* <HeaderCS/>  */}

          {/* [lesson -7.0 -React Redux -] 
            COMPONENT dispathces a ACTION to a REDUCERS 
            and REDUCERS has the power to change the certain things
            and REDUCERS changes everything at CENTRAL STORE only
            beacause that the place where everything goes up
            this CENTRAL STORE trigger to the SUBSCRIPTION and 
            and pass updated state as props to the COMPONENT
          */}

          {/* Implementation part in Reduxdemo.js with plane js*/}

          {/* Redux in react example 
          first need wrap App.js of index.js in Provider component and need to pass store as a props
          */}

          {/*React redux not using Hook */}
            {/* <h2>{props.count}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button> */}


          {/*React redux Using Hook {useSelector , useDispath} */}
          <h2>{count}</h2>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

//for HOC
//need to pass App as a parameter to HOC component
// const ExtraPropsApp = ExtraPopsAddedHOC(App);

// const favNum = WithFavoriteNum(App);
// export default favNum;

//for redux if not using hook
// function mapStateToProps(globalState){
//   return{
//     count:globalState
//   }
// }

// const mapDispatchToProps = {
//     increment:increment,
//     decrement:decrement
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);

//for redux if using hook {useSelector, useDispatch}
export default App;
