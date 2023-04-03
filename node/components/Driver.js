import React, { useState, useEffect } from "react";
import HitchInstance from "@/blockchain_utils/hitch";

const Driver = (address) => {
  const [driver, setDriver] = useState("");

  useEffect(() => {
    const func = async () => {
      const hitchInstance = HitchInstance(address.address);
      const driver_add = await hitchInstance.methods.driver().call();
      setDriver(driver_add);
    };
    func();
  }, []);

  return <div>To: {driver}</div>;
};

export default Driver;
