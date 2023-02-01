// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { allPostsQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if(req.method === 'GET'){
    const query = allPostsQuery();

  }
  res.status(200).json({ name: "John Doe" });
}
