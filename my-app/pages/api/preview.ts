import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.setPreviewData({ name: 'Makima' })
    if (typeof req.query.redirect === 'string') {
        res.redirect(req.query.redirect)
    }
}
