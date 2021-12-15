import styles from './Home.module.scss'
import { FriendPreview } from '../../components/friendPreview';

const friends = [
    { name: 'Chandla', photo: 'https://randomuser.me/api/portraits/lego/7.jpg' },
    { name: 'Briscola', photo: 'https://randomuser.me/api/portraits/lego/2.jpg' },
    { name: 'Bulo', photo: 'https://randomuser.me/api/portraits/lego/6.jpg' }
]

const messages = [
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Pippo' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Chandla' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Bulo' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Pippo' },
    { text: 'Lorem Ipsum', date: new Date(), sender: 'Pippo' }
]

const posts = [
    { author: 'John', text: 'Lorem Ipsum', date: new Date(), photo: '' },
    { author: 'Bulo', text: 'So bulo', date: new Date(), photo: '' },
    { author: 'Chandla', text: 'Che sonno', date: new Date(), photo: '' }
]

const Home = () => {
    return (
        <section className={styles.home}>
            <h3>Benvenuto Utente</h3>
            <div className={styles.grid}>
                <aside>{friends.map((friend, index) => (<FriendPreview key={index} data={friend} />))}</aside>
                <main>Post</main>
                <aside>Messagi</aside>
            </div>
        </section>
    )
}

export default Home