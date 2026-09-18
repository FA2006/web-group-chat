import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Home = () => {

    const [groups] = useState([
        { title: 'Group 1', body: 'This is the first group.', unread: 2, favorite: true, private: false, id: 1, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 2', body: 'This is the second group.', unread: 2, favorite: true, private: false, id: 2, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 3', body: 'This is the third group.', unread: 2, favorite: true, private: false, id: 3, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 4', body: 'This is the fourth group.', unread: 2, favorite: true, private: false, id: 4, image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 5', body: 'This is the fifth group.', unread: 2, favorite: true, private: false, id: 5, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 6', body: 'This is the sixth group.', unread: 2, favorite: true, private: false, id: 6, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 7', body: 'This is the seventh group.', unread: 2, favorite: true, private: false, id: 7, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80' },
        { title: 'Group 8', body: 'This is the eighth group.', unread: 2, favorite: true, private: false, id: 8, image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=900&q=80' }
    ]);

    const [selectedGroup, setSelectedGroup] = useState(groups[0]?.id ?? null);

    return ( 
        <div className="home">

            <div className="search-container">
                <FiSearch className="search-icon" aria-hidden="true" />
                <input
                    type="search"
                    placeholder="Ask Ai or Search..."
                    className="search-input"
                    aria-label="Search"
                />
            </div>

            <div className="header-section">
                <button type="button">all</button>
                <button type="button">Sports</button>
                <button type="button">Tech</button>
                <button type="button">Comedy</button>
                <button type="button">Education</button>
                <button type="button">Business</button>
                <button type="button" aria-label="Add filter">+</button>
            </div>

            <h2>Home page</h2>

            <div className="group-preview">
                {groups.map((group) => (
                    <button
                        type="button"
                        className={`group-card ${selectedGroup === group.id ? 'selected' : ''}`}
                        key={group.id}
                        onClick={() => setSelectedGroup(group.id)}
                        style={{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${group.image})` }}
                        aria-pressed={selectedGroup === group.id}
                    >
                        <h3>{group.title}</h3>
                        <p>{group.body}</p>
                        <span>{group.unread} unread messages</span>
                    </button>
                ))}
            </div>

        </div>
     );
}
 
export default Home;