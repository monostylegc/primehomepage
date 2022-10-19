import withHandler, { ResponseType } from '@libs/server/withhandler';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client';

//import { getSession } from 'next-auth/react';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === 'GET') {
    const treatmentInfos = await client.treatmentInfo.findMany({});
    res.json({
      ok: true,
      treatmentInfos,
    });
  }
  if (req.method === 'POST') {
    //const session = await getSession({ req })

    //if(!session) return res.status(401).json({ ok: false, error: "Login first, plz." })

    const {
      body: { title, catergory, content, imageId },
    } = req;
    const treatmentInfo = await client.treatmentInfo.create({
      data: {
        title : title,
        category : catergory,
        content : content,
        image : imageId
      },
    })

    res.json({
      ok: true,
      treatmentInfo,
    })
  }
}

export default withHandler({
    methods: ['GET', 'POST'],
    handler,
})