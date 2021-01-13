import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const contact = await db
    .collection("contact")
    .find({})
  res.json(contact);
};