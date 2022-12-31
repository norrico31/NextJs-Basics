import { useSession, getSession } from "next-auth/react"

export default function Blog({ data }: any) {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>Blog page - {data}</div>
    )
}

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)
    return {
        props: {
            session,
            data: session ? 'List of Private blogs' : 'List of public blogs'
        }
    }
}