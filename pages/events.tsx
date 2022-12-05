import { useState } from 'react'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useRouter } from 'next/router'

export default function Events({ eventList = [] }: { eventList: InferGetServerSidePropsType<typeof getServerSideProps>[] }) {
    const [initialEvents] = useState(eventList)
    const [events, setEvents] = useState(initialEvents)
    const router = useRouter()
    const fetchSelectedEvent = async (event: string) => {
        const res = await fetch(`http://localhost:4000/events?category=${event}`)
        const data = await res.json()
        setEvents(data)
        router.push(`events?category=${event}`, undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={() => fetchSelectedEvent('Sports')}>Sports Event</button>
            <button onClick={() => fetchSelectedEvent('Politics')}>Politics Event</button>
            <button onClick={() => setEvents(initialEvents)}>All Events</button>
            <h1>List of events</h1>
            {events.map((evt: any) => (
                <div key={evt.id}>
                    <h2>{evt.title}</h2>
                    <h3>{evt.category}</h3>
                    <p>{evt.description}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context
    const { category } = query
    const queryString = category ? `category=${category}` : ''
    const res = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await res.json()
    return {
        props: {
            eventList: data
        }
    }
}
