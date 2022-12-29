import Head from "next/head";

export default function Blog({ title, description }: { title: string, description: string }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <div>
                public env - {process.env.NEXT_PUBLIC_SAMPLE}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const pass = process.env.DB_PASSWORD
    console.log(user, pass)
    return {
        props: {
            title: 'NextJs Tutorial',
            description: 'Blog Description'
        }
    }
}