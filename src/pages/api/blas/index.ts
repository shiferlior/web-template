import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import { getSdk } from '../../../generated/backend/graphql';
import { GraphQLClient } from 'graphql-request';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }
    const sdk = getSdk(new GraphQLClient('http://localhost:8080/v1/graphql'));
    const pm = await sdk.getProjectManagers();
    res.status(200).json(pm);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
