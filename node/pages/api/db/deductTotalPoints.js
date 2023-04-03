import { client } from "../../../lib/sanity";

const deductPoints = async (req, res) => {
  try {
    console.log(req.body._id, req.body.points);
    await client
      .patch(req.body._id)
      .dec({
        totalPoints: req.body.points,
      })
      .commit();

    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default deductPoints;
