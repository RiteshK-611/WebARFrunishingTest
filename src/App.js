import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import loadable from '@loadable/component'
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Header from "./components/header/Header";
// import Home from "./components/home/Home";
// import Cart from "./components/cart/Cart";
// import DetailView from "./components/product/DetailView";
// import ARView from "./components/webar/ARView";
// import Footer from './components/footer/Footer';
const Home = loadable(() => import('./components/home/Home'))
const Cart = loadable(() => import('./components/cart/Cart'))
const DetailView = loadable(() => import('./components/product/DetailView'))
const ARView = loadable(() => import('./components/webar/ARView'))

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter basename="/">
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
              <Route exact path="/product/ar/:id" component={ARView} />
            </Switch>
          </Box>
          {/* <Footer />   */}
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
