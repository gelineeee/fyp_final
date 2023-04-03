import { client } from "../../../lib/sanity";

const getTotalPoints = async (req, res) => {
  try {
    const query = `
    *[_type=="points"]{totalPoints}
    `;

    const sanityResponse = await client.fetch(query);
    console.log(sanityResponse);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getTotalPoints;
