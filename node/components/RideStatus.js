import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const RideStatus = (address) => {
  const [ridestatus, setRideStatus] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const rideStatus = await hitchInstance.methods.hitchState().call();

      if (rideStatus == 0) {
        setRideStatus("Available");
      } else if (rideStatus == 1) {
        setRideStatus("Matched");
      } else if (rideStatus == 2) {
        setRideStatus("Ongoing");
      } else if (rideStatus == 3) {
        setRideStatus("Ended");
      } else if (rideStatus == 4) {
        setRideStatus("Cancelled");
      }
    };
    func();
  }, []);

  return <div>Status: {ridestatus}</div>;
};

export default RideStatus;
