import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const GetRider = (address) => {
  const [rider, setRider] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const Rider = await hitchInstance.methods.rider().call();
      setRider(Rider);
    };
    func();
  }, []);

  return (
    <div>
      Rider: {rider.slice(0, 6)}...{rider.slice(36)}
    </div>
  );
};

export default GetRider;
