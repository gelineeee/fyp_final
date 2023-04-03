import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const GetSelectedRide = (address) => {
  const [selectedride, setSelectedRide] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const selectedRide = await hitchInstance.methods.selectedRide().call();
      setSelectedRide(selectedRide);
    };
    func();
  }, []);

  return <div>{selectedride}</div>;
};

export default GetSelectedRide;
