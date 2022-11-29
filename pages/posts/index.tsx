import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"

function Posts({ posts }: { posts: InferGetStaticPropsType<typeof getStaticProps> }) {
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

export const getStaticProps: GetStaticProps = async function () {
    const response = fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response
    const data = await result.json()
    return {
        props: {
            posts: data
        },
        revalidate: 10
    }
}