import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const params = req.query.params
    if (params === undefined) {
        return res.status(200).json({ name: 'Home', lists: [] })
    }
    return res.status(200).json(params)
}