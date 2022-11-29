import { GetServerSideProps, GetServerSidePropsContext, InferGetStaticPropsType } from 'next'

function ArticleByCategory({ category, categories, }: { category: string; categories: InferGetStaticPropsType<typeof getServerSideProps>[] }) {
    return (
        <>
            <h2>Showing news for category {category}</h2>
            {categories?.map((cat: any) => (
                <div key={cat.id}>
                    <h2>{cat.title}</h2>
                    <p>{cat.description}</p>
                </div>
            ))}
        </>
    )
}

export default ArticleByCategory

export const getServerSideProps: GetServerSideProps = async function (context: GetServerSidePropsContext) {
    const { params, req, res, query } = context
    console.log(query)
    // res.setHeader('Set-Cookie', ['name=gerald'])
    const response = fetch(`http://localhost:4000/news?category=${params?.category}`)
    const result = await response
    const data = await result.json()
    return {
        props: {
            categories: data,
            category: params?.category
        }
    }
}