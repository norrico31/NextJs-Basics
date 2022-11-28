import User from "../components/user"

const UserList = ({ users }: { users: any[] }) => {
    console.log(users)
    return (
        <>
            <h1>User List</h1>
            {users.map((user) => {
                return <User key={user.id} user={user} />
            })}
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const result = fetch('https://jsonplaceholder.typicode.com/users')
    const res = await result
    const data = await res.json()
    return {
        props: {
            users: data
        }
    }
}