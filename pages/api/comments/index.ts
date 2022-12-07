import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(comments)
    } else if (req.method === 'POST') {
        const comment = req.body.comment
        comments.push({ id: Date.now() + 1 + '', text: comment })
        res.status(201).json(comments)
    }
}