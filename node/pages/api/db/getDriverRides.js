import { client } from "../../../lib/sanity";

const getDriverRides = async (req, res) => {
  try {
    const query = `
    *[_type=="trips" && (rideStatus=="Ongoing" || rideStatus=="Matched") && driver._ref=="${req.query.walletAddress}"]{pickup,dropoff,rideTimestamp,price,rideStatus,rideCategory,passenger,driver,contractAddress, _id}
    `;

    const sanityResponse = await client.fetch(query);
    console.log(sanityResponse);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getDriverRides;
