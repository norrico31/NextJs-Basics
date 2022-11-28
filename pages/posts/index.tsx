import Link from "next/link"

function Posts({ posts }: { posts: any }) {
    return <>
        {posts?.map((post: any) => (
            <Link href={`/posts/${post.id}`} key={post.id} passHref>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
        ))}
    </>
}

export default Posts

export async function getStaticProps() {
    const response = fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response
    const data = await result.json()
    return {
        props: {
            posts: data
        }
    }
}