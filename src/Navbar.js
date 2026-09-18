import { MdCameraAlt } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    
    return ( 
        <nav className="Navbar">
            <h1>Group Chat</h1>
            <div className="Icons">
                <button type="button" aria-label="Open camera">
                    <MdCameraAlt size={24} />
                </button>
                <button type="button" aria-label="Toggle menu">
                    <FiMenu size={24}  />
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;