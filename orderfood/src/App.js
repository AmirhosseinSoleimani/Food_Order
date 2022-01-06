import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
// import Welcome from "./pages/Welcome";
// import Products from "./pages/Products";
// import Home from "./pages/Home";
// import MainHeader from "./components/MainHeader";
// import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from './components/Footer';

function App() {
  return (
      <div className={'App'}>
          <Navbar/>
          <main>
              <Route path={'/'}>
                  <Home/>
                  <Footer/>
              </Route>
          </main>
      </div>

    // <div className="App">
    //   <MainHeader/>
    //     <main>
    //         <Route path={"/welcome"}>
    //             <Welcome/>
    //         </Route>
    //         <Route path={"/products"}>
    //             <Products/>
    //         </Route>
    //         <Route path={"/product-detail/:productId"}>
    //             <ProductDetail/>
    //         </Route>
    //     </main>
    // </div>
  );
}

export default App;
