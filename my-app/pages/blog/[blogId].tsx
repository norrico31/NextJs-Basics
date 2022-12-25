import Head from "next/head";

export default function Blog({ title, description }: { title: string, description: string }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            title: 'NextJs Tutorial',
            description: 'Blog Description'
        }
    }
}