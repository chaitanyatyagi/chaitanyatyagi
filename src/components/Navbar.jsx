import "../style/navbar.css"
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Cookies from "universal-cookie"

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar({ isLoggedIn }) {
    console.log(isLoggedIn)
    const [IsMobile, SetIsMobile] = useState(false);
    const [cancleButton, setCanclebutton] = useState(true)
    const shownavlinks = () => {
        if (IsMobile) {
            SetIsMobile(false)
            setCanclebutton(true)

        }
        else {
            SetIsMobile(true)
            setCanclebutton(false)
        }
    }

    return (
        <>

            <div className="main_nav">
                <div className="leftlogo"><div className="leftlogoins"></div></div>
                <div className="nav_links">
                    <div className="menubar" id="menu">
                        <button className='btn' onClick={() => shownavlinks()}>{cancleButton ? <FaBars /> : <FaWindowClose />}</button>
                    </div>
                    <div className={IsMobile ? "mobile" : "laptop"}>
                        <Link to="/" className="centertabs">HOME</Link>
                        <Link to="/events" className="centertabs">EVENTS</Link>
                        <Link to="/flagship-events" className="centertabs">FLAGSHIP EVENTS</Link>
                        <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="MORE"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                {/* <NavDropdown.Item href="#action/3.2">
                                    <Link className="text-white">HOSPITALITY</Link>
                                </NavDropdown.Item> */}
                                <NavDropdown.Item><Link to="/sponsors" className="text-white">SPONSORS</Link></NavDropdown.Item>
                                {/* <NavDropdown.Item><Link className="text-white">HOSPITALITY</Link></NavDropdown.Item> */}
                                <NavDropdown.Item><Link to="/contactus" className="text-white">OUR TEAM</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        {/* <div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="EVENTS"
                                menuVariant="dark"
                                className="navdrop"
                            >
                                <NavDropdown.Item>
                                    <Link to="flagship-events" className="text-white">FLAGSHIP EVENTS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link to="events" className="text-white">EVENTS</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div> */}
                        <div>
                            {/* <Link to="/register" className="register">REGISTER</Link> */}
                            {
                                isLoggedIn ? <Link to="/register" className="text-white" onClick={() => { Cookies.remove('jwt', { path: '/' }); window.location.reload() }}>LOGOUT</Link> : <Link to="/register" className="text-white">REGISTER</Link>
                            }
                            {
                                isLoggedIn ? <Link to="/profile" className="text-white">PROFILE</Link> : " "
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
