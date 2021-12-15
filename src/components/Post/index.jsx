import styles from './Post.module.scss';

const Post = (props) => {
    const data = props.data || {
        author: 'John',
        text: 'Lorem Ipsum',
        date: new Date(),
        photo: 'https://images.unsplash.com/photo-1639430539438-acaa7a95b679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80'
    }
        ;

    return (
        <article className={styles.post}>
            <h3>{data.author}</h3>
            <p><small>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</small></p>
            <p>{data.text}</p>
            {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
        </article>
    )
}

export { Post };