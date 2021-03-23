import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Categories from './view/categories';
import Category from "./view/category";

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

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter> 
          <Switch>
            <Route exact path= "/">
              <Wrapper>
              <Login/>
              </Wrapper>
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
