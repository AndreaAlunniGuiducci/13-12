import styles from './Home.module.scss'
import { FriendPreview } from '../../components/friendPreview';
import { MessagePreview } from '../../components/MessagePreview';
import { Post } from '../../components/Post';
import { useState } from 'react';

const friends = [
    { name: 'Chandla', photo: 'https://randomuser.me/api/portraits/lego/7.jpg' },
    { name: 'Briscola', photo: 'https://randomuser.me/api/portraits/lego/2.jpg' },
    { name: 'Bulo', photo: 'https://randomuser.me/api/portraits/lego/6.jpg' }
]

const messages = [
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Pippo' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Chandla' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Bulo' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Briscola' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Pippo' }
]

const posts = [
    { author: 'John', text: 'Lorem Ipsum', date: new Date(), photo: '' },
    { author: 'Bulo', text: 'Gin ch`è bulo', date: new Date(), photo: 'https://images.unsplash.com/photo-1639430539438-acaa7a95b679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80' },
    { author: 'Chandla', text: 'Che sonno', date: new Date(), photo: '' }
]

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);


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