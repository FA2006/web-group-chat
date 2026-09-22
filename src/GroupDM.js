import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiPhone, FiMoreVertical, FiSmile, FiPlus, FiMinus } from 'react-icons/fi';
import groups from './data/groups';

const emojis = ['😀', '😂', '😍', '😎', '👍', '👏', '🎉', '❤️', '🔥', '🙏', '😊', '😢'];

const GroupDM = ({ isTaskBarGroup, onAddToTaskBar, onRemoveTask }) => {
    // Get the group ID from the URL
    const { groupId } = useParams();

    // Find the group that matches the ID
    const group = groups.find(
        (group) => group.id === Number(groupId)
    );
    const [messages, setMessages] = useState(group?.messages || []);
    const [messageText, setMessageText] = useState('');
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const messagesRef = useRef(null);

    useEffect(() => {
        setMessages(group?.messages || []);
        setMessageText('');
        setEmojiPickerOpen(false);
    }, [groupId, group]);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

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
        <div
            className="group-dm"
            style={{
            '--group-image': `url(${group.image})`,
            backgroundImage: `linear-gradient(
                135deg,
                rgba(0,0,0,0.45),
                rgba(0,0,0,0.25)
            ), var(--group-image)`
            }}>


            {/* Background Video */}
            <video
            className="group-dm-video"
            src={group.video}
            autoPlay
            muted
            loop
            playsInline
            />

            {/* Group Header */}
            <div className="group-dm-header">
                <div className="group-dm-left">
                    <img className="group-dm-image" src={group.image || group.DP} alt={group.title}/>

                    <div className="group-dm-meta">
                        <h2>{group.title}</h2>
                        <span>{group.members}</span>
                    </div>
                </div>

                <div className="group-dm-actions" aria-label="Chat actions">
                    <button
                        type="button"
                        className="group-dm-action-button"
                        aria-label={`Add ${group.title} to task bar`}
                        onClick={() => {
                            if (onAddToTaskBar) {
                                onAddToTaskBar(group);
                            }
                        }}>
                        <FiPlus size={20} />
                    </button>
                    <button
                        type="button"
                        className="group-dm-action-button"
                        aria-label={`Remove ${group.title}`}
                        onClick={() => {
                            if (onRemoveTask) {
                                onRemoveTask(group);
                            }
                        }}>
                        <FiMinus size={12} />
                    </button>
                    <button type="button" className="group-dm-action-button" aria-label="Call group">
                        <FiPhone size={20} />
                    </button>
                    <button type="button" className="group-dm-action-button" aria-label="Open group menu">
                        <FiMoreVertical size={20} />
                    </button>
                    
                </div>
            </div>

            {/* Messages */}
            <div className="messages" ref={messagesRef}>
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
                    {emojiPickerOpen && (
                        <div className="emoji-picker" role="group" aria-label="Emoji picker">
                            {emojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    type="button"
                                    className="emoji-option"
                                    aria-label={`Insert ${emoji}`}
                                    onClick={() => {
                                        setMessageText((currentText) => `${currentText}${emoji}`);
                                        setEmojiPickerOpen(false);
                                    }}>
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    )}
                    <button
                        type="button"
                        className="emoji-toggle"
                        aria-label="Open emoji picker"
                        aria-expanded={emojiPickerOpen}
                        onClick={() => setEmojiPickerOpen((isOpen) => !isOpen)}>
                        <FiSmile size={20} />
                    </button>
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

//web sockets 