import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Redirect, Switch
} from "react-router-dom";
import Success from "./pages/Success";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/products/:category">
                    <ProductList/>
                </Route>
                <Route path="/product/:id">
                    <Product/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
                <Route path="/addproduct">{user.isAdmin === false ? <Redirect to="/"/> : <AddProduct/>}</Route>
                <Route path="/login">{user ? <Redirect to="/"/> : <Login/>}</Route>
                <Route path="/register">
                    {user ? <Redirect to="/"/> : <Register/>}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;