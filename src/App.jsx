import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx';
import Nosotros from './components/nosotros/Nosotros';
import CartContainer from './containers/cartContainer/cartContainer.jsx';
import CartProvider from './context/cartContext/cartContext.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Contacto from './components/contacto/Contacto.js';

const App = () => {
  return (
    <CartProvider>
      
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/home" component={Home}/>

          <Route exact path="/productos/categorias/:category" component={ItemListContainer}/>

          <Route exact path="/productos" component={ItemListContainer}/>

          <Route exact path="/productos/:id" component={ItemDetailContainer}/>

          <Route exact path="/carrito" component={CartContainer}/>

          <Route exact path="/checkout" component={Checkout}/>

          <Route exact path="/nosotros" component={Nosotros}/>

          <Route exact path="/contacto" component={Contacto}/>

          <Route path="*" children={<div className="d-flex justify-content-center my-5 "><img src="/images/error-404.png" alt="Error 404" /></div>}/>

        </Switch>

        <Footer/>

      </Router>
    
    </CartProvider>
  );
};

export default App;