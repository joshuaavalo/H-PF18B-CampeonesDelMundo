// UseState y UseEffect
import { useState, useEffect } from 'react'

// React-router-doom
import {
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
} from "react-router-dom";

// Vistas (Views)
import HomePage from './components/HomePage/HomePage';
import LadingPage from './components/LadingPage/LadingPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductoCard from './components/ProductoCard/ProductoCard';
import Dashboard from "../src/pages/Dashboard"

// Components (Componentes)
import Login from './components/HomePage/Login';
import Register from './components/HomePage/Register';

// Import Data (db)
import { data } from './db/db';


function ChampionsApp() {
    
    // Data (db)
    //console.log(data)

    const [productos, setProductos] = useState(data);

    // Navigate y Location
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <>
            <Routes>
                {/* 1.-Ruta Principal - LadingPage */}
                {/* Ruta para la página de inicio */}
                <Route
                    path="/"
                    element={
                        <>
                            <LadingPage />
                        </>
                    }
                ></Route>

                {/* 2.-Ruta SPA - HomePage */}
                {/* Ruta para la página principal */}
                <Route
                    path="/homePage"
                    element={
                        <>
                            <HomePage productos={productos}/>
                        </>
                    }
                ></Route>
                <Route exact path="/" component={ProductoCard} />
                <Route path="/product/:id" element={<ProductDetails />} />
      


                {/* 5.-Ruta - login */}
                {/* Ruta para la página principal */}
                <Route
                    path="/login"
                    element={
                        <>
                            <Login/>
                        </>
                    }
                ></Route>

                {/* 6.-Ruta - register */}
                {/* Ruta para la página principal */}
                <Route
                    path="/register"
                    element={
                        <>
                            <Register/>
                        </>
                    }
                ></Route>
                

                <Route path="/dashboard" element={<Dashboard />} />


            </Routes>         
        </>
    )
}

export default ChampionsApp
