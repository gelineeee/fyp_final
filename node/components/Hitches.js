import React, { useEffect, useState } from "react";
import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";
import factory from "../blockchain_utils/creator";
import Pickup from "./Pickup";
import Dropoff from "./Dropoff";
import Cost from "./Cost";
import RideStatus from "./RideStatus";
import GetRider from "./GetRider";

const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-black text-center text-s py-3 border-b`,
  rideList: `flex flex-col flex-1 overflow-auto`,
  ride: `relative flex p-3 m-2 items-center border-2 border-white`,
  selectedRide: `relative border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: "ml-2 flex-1",
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex place-items-end absolute bottom-5 right-3`,
  price: `mr-[-0.5rem] font-medium`,
  details: `font-semibold leading-0`,
  rideStatus: `font-normal text-xs leading-9`,
};

const Hitches = () => {
  const [hitches, setHitches] = useState([]);
  const { selectedRide, setSelectedRide, ride } = useRido();
  const [carList, setCarList] = useState([]);
  const [allRides, setAllRides] = useState([]);

  // useEffect(() => {
  //   const func = async () => {
  //     const rides = await factory.methods.getDeployedRides().call();
  //     console.log(rides);
  //   };
  //   func();
  // }, []);

  useEffect(() => {
    const func = async () => {
      try {
        const response = await fetch(`/api/db/getAllRides`);

        const data = await response.json();
        console.log(data);
        setAllRides(data.data);
        setSelectedRide(data.data[0].contractAddress);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/db/getRideTypes");
        const data = await response.json();
        setCarList(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Accept a ride, or swipe up for more</div>
      <div className={style.rideList}>
        {allRides.map((arr, index) => {
          return (
            <div
              key={index}
              className={`${
                selectedRide === arr.contractAddress
                  ? style.selectedRide
                  : style.ride
              }`}
              onClick={() => {
                setSelectedRide(arr.contractAddress);
              }}
            >
              {/* {carList.map((car, index) => {
                if (car.service == arr.rideCategory) {
                  return (
                    <Image
                      src={car.iconUrl}
                      className={style.carImage}
                      height={50}
                      width={50}
                      alt="Car image"
                    />
                  );
                }
              })} */}
              <div className={style.carDetails}>
                <div className={style.details}>
                  <Dropoff address={arr.contractAddress} />
                  <Pickup address={arr.contractAddress} />
                </div>
                <div className={style.rideStatus}>
                  <RideStatus address={arr.contractAddress} />
                </div>
              </div>
              <div className={style.priceContainer}>
                <div className={style.price}>
                  <Cost address={arr.contractAddress} />
                </div>
                <Image src={ethLogo} height={10} width={35} alt="ETH logo" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hitches;
