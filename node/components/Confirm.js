import React, { useState, useEffect } from "react";
import RideSelector from "./RideSelector";
import { useRido } from "../context/ridoContext";
import { ethers } from "ethers";
import factory from "../blockchain_utils/creator";
import web3 from "../blockchain_utils/web3";

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-auto`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black rounded text-white m-4 py-4 text-center text-x1`,
};

const Confirm = () => {
  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
  } = useRido();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!address) return;
    const func = async () => {
      try {
        console.log(address);
        await fetch("/api/db/saveTrips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickupLocation: pickup,
            dropoffLocation: dropoff,
            userWalletAddress: currentAccount,
            rideStatus: "Created",
            price: price,
            selectedRide: selectedRide,
            contractAddress: address,
          }),
        });

        setLoading(false);
        window.location.reload(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    func();
  }, [address]);

  const storeTripDetails = async (pickup, dropoff) => {
    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();
      const date = new Date(Date.now()).toISOString();
      const add = await factory.methods
        .createHitch(date, price, pickup, dropoff, selectedRide.service)
        .send({
          from: accounts[0],
          value: web3.utils.toWei(price, "ether"),
        });

      setAddress(add.events.LogAddress.returnValues._address);
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
          {!loading ? (
            <div
              className={style.confirmButton}
              onClick={() => storeTripDetails(pickup, dropoff)}
            >
              Confirm
            </div>
          ) : (
            <div className={style.confirmButton}>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirm;
