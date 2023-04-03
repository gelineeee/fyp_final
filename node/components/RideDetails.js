import React, { useEffect, useState } from "react";
import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";
import Hitch from "../blockchain_utils/hitch";

const style = {
  wrapper: `p-9 bg-white rounded dark:bg-gray-800 overflow-hidden`,
  title: `mb-4 text-xl text-center font-medium text-gray-800 dark:text-white`,
  carImage: `absolute right-0`,
  carDetails: "flex-1 pt-3",
  service: `font-medium`,
  priceContainer: `flex flew-row justify-center mb-3 pt-4 text-2xl font-bold text-gray-700 dark:text-gray-200 pl-5`,
  price: `mr-[-0.6rem]`,
  details: `font-medium leading-loose text-medium flex flex-row my-3 relative`,
  coldetails: `font-medium leading-loose text-medium flex flex-col my-3 `,
  carmodel: `font-medium text-sm`,
  rideStatus: `font-normal text-xs leading-9`,
  buttonSize: `px-4 py-3`,
  button: `py-2 px-6 my-2 bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`,
  button1: `py-2 px-6 my-2 bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`,
};

const RideDetails = () => {
  const [carList, setCarList] = useState([]);
  const [carplate, setCarplate] = useState("");
  const [carmodel, setCarmodel] = useState("");
  const [phone, setPhone] = useState();
  const [driverName, setDriverName] = useState("");
  const [rating, setRating] = useState();
  const [loading, setLoading] = useState(false);
  const { ride, setCancelled } = useRido();

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

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `/api/db/getUserInfo?walletAddress=${ride[0].driver._ref}`
        );

        const data = await response.json();
        setPhone(data.data.contactNumber);
        setCarmodel(data.data.carModel);
        setCarplate(data.data.carPlate);
        setDriverName(data.data.name);
        setRating(data.data.rating);
      } catch (error) {
        console.error(error);
      }
    })();
  });

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
      <div className={style.title}>Ride Details</div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-400 after:flex-1 after:border-t after:border-neutral-400"></div>
      <div className={style.details}>
        <svg
          class="h-8 w-8 text-gray-800 mr-3 my-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div class="flex flex-col">
          <div>{driverName}</div>
          <div class="flex items-center mb-1">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-1 text-xs font-bold text-gray-900 dark:text-white">
              {rating}
            </p>
          </div>
        </div>
        <svg
          class="h-6 w-6 text-gray-900 absolute right-0 top-3"
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
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
          <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
        </svg>
      </div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-400 after:flex-1 after:border-t after:border-neutral-400"></div>
      <div className={style.details}>
        <div class="font-bold">Total Paid:</div>
        <div class="absolute -right-3 flex flex-row">
          <div class="-mr-2">{ride[0].price}</div>
          <Image src={ethLogo} height={10} width={45} alt="ETH logo" />
        </div>
      </div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-400 after:flex-1 after:border-t after:border-neutral-400"></div>
      <div class="flex flex-row relative mb-2">
        <div className={style.coldetails}>
          <div>{carplate}</div>
          <div className={style.carmodel}>{carmodel}</div>
        </div>
        {carList.map((car, index) => {
          if (car.service == ride[0].rideCategory) {
            return (
              <Image
                key={index}
                src={car.iconUrl}
                className={style.carImage}
                height={75}
                width={75}
                alt="Car image"
              />
            );
          }
        })}
      </div>
      <div class="flex items-center before:flex-1 before:border-t before:border-neutral-400 after:flex-1 after:border-t after:border-neutral-400"></div>

      <div class="flex flex-row mt-0">
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
      <div class="flex flex-row mb-2">
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
        ) : ride[0].rideStatus == "Ongoing" ? (
          <button disabled="disabled" className={style.button1}>
            You are on the way
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

export default RideDetails;
