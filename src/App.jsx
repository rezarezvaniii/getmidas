import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Homepage from './Component/homePage';
import Livemarket from './Component/Livemarket';
import Fees from './Component/Fees';
import Login from './Component/Login';
import AboutUs from './Component/AboutUs';
import MidasEars from './Component/MidasEars';
import "./index.css"
import NotFound from './Component/NotFound';

export default function App() {
    return (
        <>
        
            <Header />

            <Routes>
                <Route path='/login' Component={Login} />
                <Route path='/fees' Component={Fees} />
                <Route path='/aboutus' Component={AboutUs} />
                <Route path='/midasEars' Component={MidasEars} />
                <Route path='/LiveMarket' Component={Livemarket} />
                <Route path='/not-found' Component={NotFound} />
                <Route path='/' exact Component={Homepage} />
            </Routes>

        </>
    )
}