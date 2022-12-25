import { ReactElement } from "react"
import Head from "next/head"
import Footer from "/components/Footer"

export default function About() {
    return (
        <>
            <Head>
                <title>About Gerald</title>
                <meta name='description' content='programming' />
            </Head>
            <h1 className="content">About Page</h1>
        </>
    )
}

About.getLayout = function PageLayout(page: ReactElement) {
    return (
        <>
            {page}
            {/* <Footer /> */}
        </>
    )
}