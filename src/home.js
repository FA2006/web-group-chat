import { useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import groups from './data/groups';

const categories = ['All', 'Sports', 'Tech', 'Comedy', 'Education', 'Business', 'music', 'health', 'gaming', 'movies', 'politics', 'news', 'travel', 'food', ];

const Home = ({ onAddToTaskBar }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const visibleGroups = groups.filter((group) => {
        const matchesCategory = selectedCategory === 'All'
            ? true
            : group.category?.toLowerCase() === selectedCategory.toLowerCase();

        const text = `${group.title} ${group.category || ''}`.toLowerCase();
        const matchesSearch = text.includes(searchQuery.trim().toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="home">

            {/* Search */}
            <div className="search-container">
                <FiSearch className="search-icon" aria-hidden="true"/>
                <input
                    type="search"
                    placeholder="Ask AI or Search..."
                    className="search-input"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </div>

            {/* Categories */}
            <div className="header-section">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={selectedCategory === category ? 'selected-category' : ''}
                        aria-pressed={selectedCategory === category}
                        onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
                <button type="button" aria-label="Add filter">+</button>
            </div>

            <h2>Home page</h2>

            {/* Groups */}
            <div className="group-preview">

                {visibleGroups.map((group) => (
                    <Link
                        to={`/group/${group.id}`}
                        className="group-card"
                        key={group.id}
                        style={
                            !group.video
                                ? {
                                    backgroundImage: `linear-gradient(
                                        135deg,
                                        rgba(0,0,0,0.45),
                                        rgba(0,0,0,0.25)
                                    ), url(${group.image})`
                                }
                                : undefined
                        }>
                        {group.video && (
                            <video
                                className="group-card-video"
                                src={group.video}
                                autoPlay
                                muted
                                loop
                                playsInline/>
                        )}

                        <button
                            type="button"
                            className="group-card-add"
                            aria-label={`Add ${group.title} to task bar`}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                onAddToTaskBar(group);
                            }}>
                            <FiPlus size={18} />
                        </button>

                        <h3>{group.title}</h3>
                        <p>{group.body}</p>
                        <span>{group.unread} unread messages</span>
                        <p>{group.members}</p>
                    </Link>
                ))}
                
            </div>
        </div>
    );
};


export default Home;