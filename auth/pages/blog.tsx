import { useSession, getSession } from "next-auth/react"

export default function Blog({ data }: any) {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div style={{ minHeight: '100vh' }}>
            Blog page - {data}
        </div>
    )
}

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)
    return {
        ...(session == null) ? {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false
            }
        } : {
            props: {
                session,
                data: session ? 'List of Private blogs' : 'List of public blogs'
            }
        }
    }
}