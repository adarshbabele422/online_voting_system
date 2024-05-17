import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import "./Navbar.css"
import { UserContext } from '../../App';
// import styled from 'styled-components'

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const logout = async (e) => {
        e.preventDefault();

        const logo = await fetch('/logout', {
            method: 'GET'
        });
        if (logo.status === 200) {
            dispatch({ type: "USER", payload: false })
            alert('Successfully logged out')
        }
        if (logo.status === 400) {
            alert('Please login to log out :)');
            history.push('/signin')
        }

    }
    const ToggleManu = () => {
        if (state) {
            return (
                <div className='row1 justify-content-between'>
                    <div className='text1'><NavLink className='text' exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className='text' exact activeClassName="active" to="/vote">Vote</NavLink>
                    </div>
                    <div className='text1'>
                        <NavLink className=' button text ' exact activeClassName="active" to="/signout" onClick={logout}> Logout </NavLink></div>
                </div>
            )

        }
        else {
            return (
                <div className='row1 justify-content-between'>
                    <div className='text1'><NavLink className='text' exact activeClassName="active" to="/">Home</NavLink>
                        {/* <NavLink className='text' exact activeClassName="active" to="/vote">Vote</NavLink> */}
                        
                    </div>
                    <div className='text1'><NavLink className=' button text ' exact activeClassName="active" to="/signin">Login</NavLink>
                        <NavLink className=' button text' exact activeClassName="active" to="/signup">Signup</NavLink></div>
                </div>
            )
        }
    }


    return (
        <>
            <nav className='navbar navbar-expand-lg container-fluid' >
                <div className='nav grid text-center justify-content-between mx-sm-5 mx-1'>
                    <div className='g-col-4 text-light me-md-2 me-0'>
                        <h3>Online Voting System</h3>
                    </div>
                    <div className='theme'>
                <input type="checkbox" class="sr-only" id="darkmode-toggle" />
                <label for="darkmode-toggle" class="toggle">
                    <span>Toggle dark mode</span>
                </label></div>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> */}

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className='collapse navbar-collapse col-7 justify-content-evenly' id='navbarSupportedContent'> */}
                    <div className="offcanvas offcanvas-top g-col-4 text-center h-50" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <ToggleManu />
                    </div>


                </div>
                
            </nav>
        </>


    );
};

export default Navbar;