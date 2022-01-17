export default function Home({posts}) {
    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>
                                {post.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://127.0.0.1:8080/api/post');
    const posts = await res.json();

    return {
        props : {
            posts
        }
    }
}