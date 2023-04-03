import { client } from "../../../lib/sanity";

const updateUser = async (req, res) => {
  try {
    await client
      .patch(req.body._id)
      .set({
        driver: {
          _ref: req.body.driver,
          _type: "reference",
        },
        rideStatus: req.body.rideStatus,
      })
      .commit();

    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default updateUser;
