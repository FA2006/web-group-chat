import { useState } from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const menuItems = [
    'New Group',
    'New Broadcast',
    'Started',
    'Read All',
    'Settings'
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <nav className="Navbar">
            <h1>Group Chat</h1>
            <div className="Icons">
                <button type="button" aria-label="Open camera">
                    <MdCameraAlt size={24} />
                </button>
                <div className="menu-wrapper">
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="menu-toggle"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <FiMenu size={24} />
                    </button>

                    {menuOpen && (
                        <div className="menu-dropdown" role="menu" aria-label="Main menu">
                            {menuItems.map((item) => (
                                <button key={item} type="button" className="menu-item" role="menuitem">
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;