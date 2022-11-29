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
    const { params } = context
    const response = fetch(`http://localhost:4000/news?category=${params?.category}`)
    const res = await response
    const data = await res.json()
    return {
        props: {
            categories: data,
            category: params?.category
        }
    }
}