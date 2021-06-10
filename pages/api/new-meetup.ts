import { MongoClient } from "mongodb";

const Handler = (req: Request, res: Response) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
  }
};

export default Handler;
