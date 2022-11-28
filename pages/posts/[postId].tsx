function Post(props: any) {
    console.log(props)
    return <>
        <h2>single post</h2>
    </>
}

export default Post

export async function getStaticProps(context: any) {
    console.log(context)
    const response = fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const result = await response
    const data = await result.json()
    return {
        props: {
            post: data
        }
    }
}