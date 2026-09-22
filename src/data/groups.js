const groups = [
    {
        id: 1,
        title: 'web developers',
        category: 'Tech',
        body: 'Share code, tools, and web development ideas.',
        unread: 2,
        members: '500 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Alex', text: 'Welcome to Group 1.' },
            { id: 2, sender: 'Sam', text: 'Great to be here.' },
            { id: 3, sender: 'Alex', text: 'Looking forward to the discussion.' },
            { id: 4, sender: 'joy', text: 'welcome Sam.' },
            { id: 5, sender: 'Sam', text: 'Thanks, joy!' }
        ]
    },
    {
        id: 2,
        title: 'food lovers',
        category: 'food',
        body: 'Discover recipes, restaurants, and great meals.',
        unread: 2,
        members: '27 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Jordan', text: 'What should we discuss today?' },
            { id: 2, sender: 'Alex', text: 'I was thinking about trying that new restaurant.' },
            { id: 3, sender: 'Sam', text: 'Sounds good to me!' },
            { id: 4, sender: 'Jordan', text: '😊😊' },
            { id: 5, sender: 'Sarah', text: 'I love that restaurant!' }
        ]
    },
    {
        id: 3,
        title: 'Gamars HQ',
        category: 'gaming',
        body: 'Talk games, gear, strategies, and new releases.',
        unread: 2,
        members: '5 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Jordan', text: 'welcome to gamers HQ yall😊' },
            { id: 2, sender: 'Alex', text: 'Thanks for the welcome, Jordan!' },
            { id: 3, sender: 'Tray', text: 'i just got a new console guys 😎!' }
        ]
    },
    {
        id: 4,
        title: 'Football Fans',
        category: 'Sports',
        body: 'Follow matches, share opinions, and celebrate every goal.',
        unread: 2,
        members: '50 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Mason', text: 'Who are you backing in the weekend derby?' },
            { id: 2, sender: 'Nia', text: 'I think the midfield will decide it.' },
            { id: 3, sender: 'Leo', text: 'The home crowd is going to be huge.' },
            { id: 4, sender: 'Mason', text: 'Let’s hope for a clean match and no red cards.' }
        ]
    },
    {
        id: 5,
        title: 'back to school',
        category: 'Education',
        body: 'Study together, share notes, and stay motivated.',
        unread: 2,
        members: '6 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Alicia', text: 'Did anyone finish the chemistry worksheet?' },
            { id: 2, sender: 'Theo', text: 'I sent my notes in the shared folder.' },
            { id: 3, sender: 'Maya', text: 'Thanks! I’m reviewing the last chapter before class.' },
            { id: 4, sender: 'Alicia', text: 'Same here. Group study tonight works for me.' }
        ]
    },
    {
        id: 6,
        title: 'brokers lounge',
        category: 'Business',
        body: 'Discuss markets, deals, and business opportunities.',
        unread: 2,
        members: '19 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Daniel', text: 'The market is steady this morning, but I’m watching energy stocks.' },
            { id: 2, sender: 'Priya', text: 'I’ve seen stronger volume in the tech sector lately.' },
            { id: 3, sender: 'Omar', text: 'Any updates on the new commercial property deal?' },
            { id: 4, sender: 'Daniel', text: 'Still in negotiation, but the outlook is positive.' }
        ]
    },
    {
        id: 7,
        title: 'the doctors',
        category: 'health',
        body: 'Exchange health knowledge and support one another.',
        unread: 2,
        members: '10 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Dr. Keene', text: 'Morning everyone. Any updates on patient education materials?' },
            { id: 2, sender: 'Dr. Singh', text: 'I’ve added a new checklist for preventative care.' },
            { id: 3, sender: 'Dr. Lopez', text: 'Great idea. We should review it in the next roundtable.' },
            { id: 4, sender: 'Dr. Keene', text: 'Perfect. Let’s keep those best practices flowing.' }
        ]
    },
    {
        id: 8,
        title: 'musicians',
        category: 'music',
        body: 'Share songs, performances, and musical inspiration.',
        unread: 2,
        members: '11 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Rae', text: 'Anyone listening to new jazz releases this week?' },
            { id: 2, sender: 'Noah', text: 'I found a great live session with a really smooth solo.' },
            { id: 3, sender: 'Lena', text: 'I’m working on a new chord progression and need feedback.' },
            { id: 4, sender: 'Rae', text: 'Send it over — I’d love to hear it.' }
        ]
    },
    {
        id: 9,
        title: 'jokers',
        category: 'Comedy',
        body: 'Share jokes, funny stories, and plenty of laughs.',
        unread: 2,
        members: '11 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Milo', text: 'What’s the funniest thing that happened to you this week?' },
            { id: 2, sender: 'Tess', text: 'I accidentally called my teacher “mom” during class.' },
            { id: 3, sender: 'Milo', text: 'That is absolutely devastating 😂' },
            { id: 4, sender: 'Nora', text: 'I still can’t stop laughing at that one.' }
        ]
    },
    {
        id: 10,
        title: 'cinema lovers',
        category: 'movies',
        body: 'Recommend films, review new releases, and talk cinema.',
        unread: 2,
        members: '11 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Sofia', text: 'Have you watched the new sci-fi thriller yet?' },
            { id: 2, sender: 'Ben', text: 'Yes, and the ending was wild.' },
            { id: 3, sender: 'Zara', text: 'I’m picking a classic noir for movie night this weekend.' },
            { id: 4, sender: 'Sofia', text: 'That sounds perfect — send me the title.' }
        ]
    },
    {
        id: 11,
        title: 'political debates',
        category: 'politics',
        body: 'Discuss current events, ideas, and political perspectives.',
        unread: 2,
        members: '11 members',
        favorite: true,
        private: false,
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80',
        messages: [
            { id: 1, sender: 'Harper', text: 'What do you all think about the latest policy announcement?' },
            { id: 2, sender: 'Ethan', text: 'The economic angle is interesting, but I’m watching the public response.' },
            { id: 3, sender: 'Harper', text: 'A lot of people are split on the implementation details.' },
            { id: 4, sender: 'Mila', text: 'It’s a good debate topic, but we should keep it respectful.' }
        ]
    },
    {
        id: 12,
        title: 'travel enthusiasts',
        DP: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
        category: 'travel',
        body: 'Share travel experiences, tips, and destinations.',
        unread: 2,
        members: '11 members',
        favorite: true,
        private: false,
        video: '/videos/travel 2.mp4',
        messages: [
            { id: 1, sender: 'Nina', text: 'Anyone planning a trip this summer?' },
            { id: 2, sender: 'Chris', text: 'I’m heading to coastal towns in Portugal next month.' },
            { id: 3, sender: 'Ava', text: 'That sounds amazing. Any must-see spots?' },
            { id: 4, sender: 'Chris', text: 'Definitely the cliffside walk and the local food markets.' }
        ]
    }
];

export default groups;
