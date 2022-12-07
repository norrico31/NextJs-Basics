import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { commentId } = req.query
    if (req.method === 'GET') {
        const comment = comments.find((com) => com.id === commentId)
        return res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        // const filteredComment = comments.filter((com) => com.id !== commentId)
        const deletedComment = comments.find((com) => com.id === commentId)
        const commentIdx = comments.findIndex((comm) => comm.id === commentId)
        comments.splice(commentIdx, 1)
        return res.status(200).json(deletedComment)
    }
}