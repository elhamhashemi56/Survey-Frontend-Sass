import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = (props) => {
    return (
        <div className='navbar-Container' id={props.id}>
            <ul>
                <li>
                    <Link to='./home'>
                        <button>
                            <i class="fas fa-home navIcons"></i>
                            Home
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='./links'>
                        <button>
                            <i class="fas fa-align-left navIcons"></i>
                            Link1
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='./links'>
                        <button>
                            <i class="fas fa-align-left navIcons"></i>
                            Link2
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='./links'>
                        <button>
                            <i class="fas fa-align-left navIcons"></i>
                            Link3
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='./links'>
                        <button>
                            <i class="fas fa-align-left navIcons"></i>
                            Link4
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;