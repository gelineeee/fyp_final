import React, { useEffect, useState } from "react";
import RideSelector from "./RideSelector";
import { useRido } from "../context/ridoContext";
import { ethers } from "ethers";
import factory from "../blockchain_utils/creator";
import web3 from "../blockchain_utils/web3";
import Hitch from "../blockchain_utils/hitch";
import { client } from "../lib/sanity";

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-auto`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black rounded text-white m-4 py-4 text-center text-x1`,
};

const Confirm = () => {
  const {
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    ride,
    rider,
    setRider,
  } = useRido();
  const [loading, setLoading] = useState(false);

  const acceptRide = async () => {
    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();
      const hitchInstance = Hitch(selectedRide);
      await hitchInstance.methods.acceptHitch().send({
        from: accounts[0],
      });
      const walletAddress = await hitchInstance.methods.rider().call();
      setRider(walletAddress.toLowerCase());
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          {loading ? (
            <div className={style.confirmButton} onClick={() => acceptRide()}>
              Loading ...
            </div>
          ) : (
            <div className={style.confirmButton} onClick={() => acceptRide()}>
              Accept Ride
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
