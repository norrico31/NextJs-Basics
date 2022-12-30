import { useState, useEffect } from 'react'
import { getSession, signIn } from "next-auth/react"

export default function Dashboard() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) signIn() // change to login
            else setLoading(false)
        }
        securePage()
    }, [])

    return loading ? (<h2>Loading...</h2>) : (
        <div>dashboard</div>
    )
}
