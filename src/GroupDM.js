import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiPhone, FiMoreVertical } from 'react-icons/fi';
import groups from './data/groups';

const GroupDM = ({ isTaskBarGroup }) => {
    // Get the group ID from the URL
    const { groupId } = useParams();

    // Find the group that matches the ID
    const group = groups.find(
        (group) => group.id === Number(groupId)
    );
    const [messages, setMessages] = useState(group?.messages || []);
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
        setMessages(group?.messages || []);
        setMessageText('');
    }, [groupId, group]);

    const handleSendMessage = (event) => {
        event.preventDefault();
        const text = messageText.trim();

        if (!text) {
            return;
        }

        setMessages((currentMessages) => [
            ...currentMessages,
            { id: Date.now(), sender: 'You', text }
        ]);
        setMessageText('');
    };


    // If the group doesn't exist
    if (!group) {
        return (
            <div className="group-not-found">

                <h2>
                    Group not found
                </h2>

                <Link to="/">
                    Go back home
                </Link>

            </div>
        );
    }


    return (
        <div className="group-dm">

            {/* Group Header */}
            <div className="group-dm-header">
                <div className="group-dm-left">
                    <img className="group-dm-image" src={group.image} alt={group.title}/>

                    <div className="group-dm-meta">
                        <h2>{group.title}</h2>
                        <span>{group.members}</span>
                    </div>
                </div>

                <div className="group-dm-actions" aria-label="Chat actions">
                    <button type="button" className="group-dm-action-button" aria-label="Call group">
                        <FiPhone size={20} />
                    </button>
                    <button type="button" className="group-dm-action-button" aria-label="Open group menu">
                        <FiMoreVertical size={20} />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="messages">
                {messages.map((message) => (
                    <div className="message" key={message.id}>
                        <strong>
                            {message.sender}
                        </strong>

                        <p>
                            {message.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            {isTaskBarGroup && (
                <form className="message-input" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={messageText}
                        onChange={(event) => setMessageText(event.target.value)}
                        aria-label="Message"/>
                    <button type="submit">
                        Send
                    </button>
                </form>
            )}

        </div>
    );
};

export default GroupDM;