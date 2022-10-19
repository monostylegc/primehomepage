import withHandler, { ResponseType } from '@libs/server/withhandler';
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@libs/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    if (req.method === 'GET') {
      const { id } = req.query
      const diseaseInfo = await client.diseaseInfo.findUnique({
        where :{
            id: +id!.toString()
        }
    });

    res.json({
      ok: true,
      diseaseInfo,
    });
  }
}

export default withHandler({
    methods: ['GET'],
    handler,
    //isPrivate : false,
})