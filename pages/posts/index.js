import Link from "next/link";

function PostList({ posts }) {
    return (
        <>
            <h1>List Of Posts</h1>
            {posts.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <Link href={`/posts/${item.id}`}>
                                {item.id} {item.title}
                            </Link>
                        </div>
                        <hr />
                    </>
                )
            })}
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}