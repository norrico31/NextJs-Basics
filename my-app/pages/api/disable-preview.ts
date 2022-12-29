import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.clearPreviewData()
    res.end('Preview mode disabled')
}
