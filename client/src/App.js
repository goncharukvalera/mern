import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {Nav} from './components/Nav'
import 'materialize-css'

function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>
            <BrowserRouter>
                {isAuthenticated && <Nav />}
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
