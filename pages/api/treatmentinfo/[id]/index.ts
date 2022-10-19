import withHandler, { ResponseType } from '@libs/server/withhandler';
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@libs/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    if (req.method === 'GET') {
      const { id } = req.query
      const treatmentInfo = await client.treatmentInfo.findUnique({
        where :{
            id: +id!.toString()
        }
    });

    res.json({
      ok: true,
      treatmentInfo,
    });
  }
}

export default withHandler({
    methods: ['GET'],
    handler,
    //isPrivate : false,
})