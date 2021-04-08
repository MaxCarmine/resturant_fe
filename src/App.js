import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Categories from './view/categories';
import Category from "./view/category";
import Carello from "./view/carelloProd"

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './common/navbar';
import Footer from './common/footer';
import Login from './view/login';
import AuthWrapper from './view/authWrapper';
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store';
import {PersistGate} from "redux-persist/integration/react"
import EveryItem from "./view/everyProduct"
import Deteils from "./view/productDeteils"
import Ordini from "./view/ordini"

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter> 
          <Switch>
            <Route exact path= "/login">
              <Login/>
            </Route>
            <Route exact path="/categories">
              <AuthWrapper key="categories">
                <Wrapper>
                  <Categories/>
                </Wrapper>
              </AuthWrapper>
            </Route>
            <Route exact path="/categories/:id">
              <AuthWrapper key="category">
                <Wrapper>
                  <Category/> 
                </Wrapper>
              </AuthWrapper>
            </Route>
            <Route exact path = '/everyItem'>
              <AuthWrapper key={'category'}>
              <Wrapper>
                <EveryItem/>
              </Wrapper>
              </AuthWrapper>       
            </Route>
            <Route exact path ='/cart'> 
              <AuthWrapper key={'cart'}>
                <Wrapper>
                  <Carello/>
                </Wrapper>
              </AuthWrapper>
            </Route>
            <Route exact path='/ordini'>
              <AuthWrapper key={'ordini'}>
                <Wrapper>
                  <Ordini/>
                </Wrapper>
              </AuthWrapper>
            </Route>
            <Route excat path = '/deteils/:id'>
              <AuthWrapper key={'deteils'}>
                  <Wrapper>
                    <Deteils/>
                  </Wrapper>
              </AuthWrapper>
            </Route>
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    
  );
}
 const Wrapper =(props) =>(
      <>
        <NavBar/>
          {props.children}   
        <Footer/>   
      </>);

export default App;
