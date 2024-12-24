import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "../Menu"
import Profile from './Profile'
import Contact from './Contact'
import Atest from './atestation'
import FlowControl from './flowControl';
import Session from './session';
import Inp from './inp';
import Auth from '../auth';




class Header extends React.Component {
    render(){
        return(
            <header>
                <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/flowControl" element={<FlowControl />} />
                    <Route path="/atestation" element={<Atest />} />
                    <Route path="/session" element={<Session />} />
                    <Route path="/inp" element={<Inp />} />
                </Routes>
            </div>
            <div>
            <Auth />
            <Routes>
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>

        <div className="Logo">
            <h1>Campus</h1>
        </div>
      
            </header>
        )
    }
}

export default Header;