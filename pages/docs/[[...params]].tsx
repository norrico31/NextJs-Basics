import React from 'react'
import { useRouter } from 'next/router'

const Docs = () => {
    const { query: { params = [] } } = useRouter()
    if (params.length === 2) {
        return <h1>Viewing docs for features {params[0]} and concept {params[1]}</h1>
    } else if (params.length === 1) {
        return <h1>Viewing docs for features {params[0]}</h1>
    }
    return (
        <div>Docs Home Page</div>
    )
}

export default Docs