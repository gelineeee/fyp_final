import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const Cost = (address) => {
  const [cost, setCost] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const price = await hitchInstance.methods.cost().call();
      setCost(price);
    };
    func();
  }, []);

  return <div>Price: {cost}</div>;
};

export default Cost;
