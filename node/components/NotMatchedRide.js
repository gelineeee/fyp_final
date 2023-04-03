import React, { useEffect, useState } from "react";
import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";
import Hitch from "../blockchain_utils/hitch";
import factory from "../blockchain_utils/creator";

const style = {
  wrapper: `p-9 bg-white rounded dark:bg-gray-800 overflow-hidden`,
  title: `mb-7 text-2xl text-center font-medium text-gray-800 dark:text-white`,
  carImage: `absolute right-0 -top-5`,
  carDetails: "flex-1 pt-3",
  service: `font-medium`,
  priceContainer: `flex flew-row justify-center mb-8 pt-10 text-2xl font-bold text-gray-500 dark:text-gray-200 pl-5`,
  price: `mr-[-0.6rem]`,
  details: `font-medium leading-loose text-medium flex flex-row my-3 relative`,
  coldetails: `font-medium leading-loose text-medium flex flex-col my-2`,
  rideStatus: `font-normal text-xs leading-9`,
  buttonSize: `px-4 mt-16`,
  button: `py-2 px-6 my-2 bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`,
};

const NotMatchedRide = () => {
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ride, selectedRide, setCancelled } = useRido();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/db/getRideTypes");
        const data = await response.json();
        setCarList(data.data);
        console.log(ride[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const cancelRide = async () => {
    try {
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      const hitchInstance = Hitch(ride[0].contractAddress);
      await hitchInstance.methods.riderCancel().send({
        from: accounts[0],
      });

      setCancelled(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Looking for driver ...</div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-500 after:flex-1 after:border-t after:border-neutral-500"></div>
      <div className={style.details}>
        <div class="font-bold">Total Paid:</div>
        <div class="absolute -right-3 flex flex-row">
          <div class="-mr-2">{ride[0].price}</div>
          <Image src={ethLogo} height={10} width={45} alt="ETH logo" />
        </div>
      </div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-500 after:flex-1 after:border-t after:border-neutral-500"></div>
      <div class="flex flex-row relative my-3">
        <div className={style.details}>Ride type:</div>
        {carList.map((car, index) => {
          if (car.service == ride[0].rideCategory) {
            return (
              <Image
                key={index}
                src={car.iconUrl}
                className={style.carImage}
                height={80}
                width={80}
                alt="Car image"
              />
            );
          }
        })}
      </div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-500 after:flex-1 after:border-t after:border-neutral-500"></div>
      <div class="flex flex-row mt-2">
        <svg
          class="h-6 w-6 text-teal-600 my-auto mr-3"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="12" cy="11" r="3" />{" "}
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        </svg>
        <div className={style.coldetails}>
          <div>{ride[0].pickup}</div>
          <div class="text-xs font-normal">Pick up</div>
        </div>
      </div>
      <div class="flex flex-row">
        <svg
          class="h-6 w-6 text-red-700 my-auto mr-3"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="12" cy="11" r="3" />{" "}
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        </svg>
        <div className={style.coldetails}>
          <div>{ride[0].dropoff}</div>
          <div class="text-xs font-normal">Destination</div>
        </div>
      </div>
      <div className={style.buttonSize}>
        {loading ? (
          <button type="button" className={style.button}>
            Loading ...
          </button>
        ) : (
          <button
            type="button"
            className={style.button}
            onClick={() => cancelRide()}
          >
            Cancel Ride
          </button>
        )}
      </div>
    </div>
  );
};

export default NotMatchedRide;
