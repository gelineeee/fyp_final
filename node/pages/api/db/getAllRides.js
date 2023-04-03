import { client } from "../../../lib/sanity";

const getAllRides = async (req, res) => {
  try {
    console.log("hi", req.query.walletAddress);
    const query = `
    *[_type=="trips" && (rideStatus=="Created")]{pickup,dropoff,rideTimestamp,price,rideStatus,rideCategory,passenger,driver,contractAddress,_id}
    `;

    const sanityResponse = await client.fetch(query);
    console.log(sanityResponse);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getAllRides;
