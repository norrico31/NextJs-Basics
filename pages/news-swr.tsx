import useSWR from 'swr'

const fetcher = async () => {
    try {
        const response = fetch('http://localhost:4000/new')
        const res = await response
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export default function NewsSwr() {
    const { data, error } = useSWR('news', fetcher)
    if (error !== undefined) return <h2>error occured {error}</h2>
    console.log(data, error)
    return <h1>loading...</h1>
}