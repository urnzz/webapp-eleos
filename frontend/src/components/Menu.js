import { Link } from 'react-router-dom';
import './Menu.css';
import React, { useState } from 'react';
import logo from './Instituto-Eleos.png'; // Adjust the path to your logo file

function MenuComponent({ isAuthenticated, handleLogout }) {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <section>
                <nav className="topnav">
                    <img src={logo} alt="" className="logo" />
                    <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                    <div className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/tarefas">Tarefas</Link>
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Cadastrar</Link>
                            </>
                        ) : (
                                <button className="nav-button" onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default MenuComponent;
