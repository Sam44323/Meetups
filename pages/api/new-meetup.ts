import { MongoClient } from "mongodb";

const Handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/Meetups"
    );
    if (client) {
      const db = client.db();
      const meetupsCollections = db.collection("meetups");
      const result = await meetupsCollections.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({
        message: "Added a new meetup!",
      });
    }
  }
};

export default Handler;
