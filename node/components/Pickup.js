import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const Pickup = (address) => {
  const [pickup, setPickup] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const pickUp = await hitchInstance.methods.pickup().call();

      setPickup(pickUp);
    };
    func();
  }, []);

  return <div>From: {pickup}</div>;
};

export default Pickup;
