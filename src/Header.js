import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "./Menu"
import Profile from './Profile'
import Contact from './Contact'



class Header extends React.Component {
    render(){
        return(
            <header>
                <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Contact" element={<Contact />} />
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