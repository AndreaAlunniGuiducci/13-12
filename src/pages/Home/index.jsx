import styles from './Home.module.scss'
import { FriendPreview } from '../../components/friendPreview';
import { MessagePreview } from '../../components/MessagePreview';
import { Post } from '../../components/Post';
import { http } from '../../libs/http.js';
import { useState, useEffect } from 'react';

const friends = []

const messages = []

const posts = []

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    useEffect(() => {
        http("/friends?_limit=4")
            .then((data) => setFriendsPreview(data))

        http("/posts")
            .then((data) => setAllPosts(data))

        http("/messages?_limit=4")
            .then((data) => setMessagesPreview(data))
    },
        []
    )

    return (
        <section className={styles.home}>
            <h3>Benvenuto Utente</h3>
            <div className={styles.grid}>
                <aside>{friendsPreview.map((friend, index) => (<FriendPreview key={index} data={friend} />))}</aside>
                <main>{allPosts.map((message, index) => (<Post key={index} data={message} />))}</main>
                <aside>{messagesPreview.map((message, index) => (<MessagePreview key={index} data={message} />))}</aside>
            </div>
        </section>
    )
}

export default Home