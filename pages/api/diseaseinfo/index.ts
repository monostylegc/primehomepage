import withHandler, { ResponseType } from '@libs/server/withhandler';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client';
//import { getSession } from 'next-auth/react';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === 'GET') {
    const diseaseInfos = await client.diseaseInfo.findMany({});
    res.json({
      ok: true,
      diseaseInfos,
    });
  }
  if (req.method === 'POST') {
    //const session = await getSession({ req })

    //if(!session) return res.status(401).json({ ok: false, error: "Login first, plz." })

    const {
      body: { title, catergory, content, thumbnailId },
    } = req;
    const diseaseInfo = await client.diseaseInfo.create({
      data: {
        title : title,
        category : catergory,
        content : content,
        thumbnail : thumbnailId
      },
    });

    return res.json({
      ok: true,
      diseaseInfo,
    });
  }
}

export default withHandler({
    methods: ['GET', 'POST'],
    handler,
})