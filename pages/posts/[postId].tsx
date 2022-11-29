import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

function Post(props: { post: InferGetStaticPropsType<typeof getStaticProps> }) {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <h1>Loading...</h1>
        )
    }
    return <>
        <h2>
            {props.post.title}
        </h2>
        <p>{props.post.body}</p>
    </>
}

export default Post

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context
    const response = fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const result = await response
    const data = await result.json()
    if (data.id === undefined) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post: data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const res = await response
    const posts = await res.json()
    const paths = posts.map((post: any) => ({ params: { postId: post.id.toString() } }))
    return {
        paths,
        fallback: true
    }
}