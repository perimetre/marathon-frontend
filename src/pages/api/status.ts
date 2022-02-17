import type { NextApiRequest, NextApiResponse } from 'next';
import env from '../../env';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const envs = env();
  const { NEXT_PUBLIC_STATUS_URI } = envs;

  const status: any = {
    frontend: {
      status: 'success'
    }
  };

  if (NEXT_PUBLIC_STATUS_URI) {
    try {
      const backend = await fetch(NEXT_PUBLIC_STATUS_URI);
      const result = await backend.json();
      const text = JSON.stringify(result);
      status.backend = {
        status: text.indexOf('error') < 0 ? 'success' : 'warning',
        result
      };
    } catch (error) {
      // If failed
      status.backend = {
        status: 'failed',
        error
      };
    }
  }

  status.env = {
    NODE_ENV: envs.NODE_ENV,
    NEXT_PUBLIC_STATUS_URI: process.env.NEXT_PUBLIC_STATUS_URI,
    // Unity
    NEXT_PUBLIC_UNITY_PUBLIC_FOLDER: envs.NEXT_PUBLIC_UNITY_PUBLIC_FOLDER,
    // Unity player
    NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI: envs.NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI,
    NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER: envs.NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER,
    NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM: envs.NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM,
    NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER: envs.NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER,
    NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME: envs.NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME,
    // Marathon
    NEXT_PUBLIC_MARATHON_API: envs.NEXT_PUBLIC_MARATHON_API,
    NEXT_PUBLIC_MARATHON_API_LIST: envs.NEXT_PUBLIC_MARATHON_API_LIST
  };

  res.json(status);
}
