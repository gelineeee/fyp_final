import { client } from "../../../lib/sanity";

const getRidePoint = async (req, res) => {
  try {
    console.log(req.query.title);
    const query = `
*[_type=="rides" && title=="${req.query.title}"]{
    "service":title,
    pointsEarned,
}
`;
    const sanityResponse = await client.fetch(query);

    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getRidePoint;
