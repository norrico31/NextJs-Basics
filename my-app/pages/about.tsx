import { ReactElement } from "react"
import Footer from "../components/Footer"

export default function About() {
    return (
        <div className="content">About Page</div>
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