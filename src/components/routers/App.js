import React from 'react'
import Card from '../pages/Card'
import Nav  from '../pages/Nav'
import Home from '../pages/Home'
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import AllProducts from '../pages/AllProducts'
import Account from '../pages/Account'
import Footer from '../pages/Footer'
import { Provider } from 'react-redux'
import store from '../pages/store'
import Blog from "../pages/Blog"



const AppRouter = () => {
    
 
    return (
               <Provider store={store}> 
        <BrowserRouter>
        <Switch>            
            <CartProvider>
           
     
            <Nav />
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/contact" component={Contact} exact></Route>
            <Route path="/blogs" component={Blog}></Route>
            <Route path="/card" component={Card}></Route>
            <Route path="/allproducts" component={AllProducts}></Route>
            <Route path="/account" component={Account}></Route>
            <Footer/>
            
            </CartProvider>
        </Switch>
        </BrowserRouter>

        </Provider>
    )
}
export default AppRouter;