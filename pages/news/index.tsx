function NewsArticles({ articles }: {
    articles: {
        id: string
        title: string
        description: string
        category: string
    }[]
}) {
    return (
        <>
            <h1>News Article</h1>
            {articles?.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.category}</p>
                </div>
            ))}
        </>
    )
}

export default NewsArticles

export const getServerSideProps = async function () {
    const response = fetch(`http://localhost:4000/news`)
    const res = await response
    const data = await res.json()
    return {
        props: {
            articles: data
        }
    }
}