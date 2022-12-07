import React, { useState } from "react";
import Link from "next/link"

interface IComments {
    id: string; text: string
}

function Comments() {
    const [comments, setComments] = useState<IComments[]>([])
    const [comment, setComment] = useState<string>('')
    async function fetchComments() {
        try {
            const res = await fetch(`http://localhost:3000/api/comments`)
            const data = await res.json()
            setComments(data)
        } catch (error) {
            return error
        }
    }
    async function addComment() {
        try {
            const res = await fetch(`http://localhost:3000/api/comments`, { method: 'POST', body: JSON.stringify({ comment }), headers: { 'Content-Type': "application/json" } })
            const data = await res.json()
            // setComments(data)
            console.log(data)
        } catch (error) {
            return error
        }
    }
    return (
        <>
            <h1>Comments List</h1>
            <button onClick={fetchComments}>Fetch Comments</button>
            <hr />
            <input type="text" value={comment} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setComment(evt.target.value)} />
            <button onClick={addComment}>Submit Comment</button>
            {comments?.map((comment: IComments) => (
                <Link href={'/comments/' + comment.id} key={comment.id}>
                    <h2>{comment.id}</h2>
                    <p>{comment.text}</p>
                </Link>
            ))}
        </>
    )
}

export default Comments

// export const getServerSideProps = async function () {
//     const response = fetch(`http://localhost:3000/api/comments`)
//     const res = await response
//     const data = await res.json()
//     return {
//         props: {
//             comments: data
//         }
//     }
// }