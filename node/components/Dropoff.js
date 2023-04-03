import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const Dropoff = (address) => {
  const [dropoff, setDropoff] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const dropOff = await hitchInstance.methods.destination().call();
      setDropoff(dropOff);
    };
    func();
  }, []);

  return <div>To: {dropoff}</div>;
};

export default Dropoff;
