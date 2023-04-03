import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import UserMap from "../components/UserMap";
import LocationSelector from "../components/LocationSelector";
import Confirm from "../components/Confirm";
import Hitches from "@/components/Hitches";
import { useRido } from "../context/ridoContext";
import AcceptRides from "../components/AcceptRide";
import RideDetails from "../components/RideDetails";
import NotMatchedRide from "../components/NotMatchedRide";
import DriverDetails from "@/components/DriverDetails";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-[calc(100vh-64px)] w-full md:w-1/3 bottom-0 flex flex-col`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
  rideDetails: `h-full w-96 md:container md:mx-auto bg-white rounded-sm flex flex-col`,
};

export default function Home() {
  const { currentUserAccountType, ride, driverRide } = useRido();

  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        {ride.length == 0 && driverRide.length == 0 ? <Map /> : <UserMap />}
      </div>
      <div className={style.rideRequestContainer}>
        {currentUserAccountType == "Rider" ? (
          ride.length == 0 ? (
            <div className={style.rideRequest}>
              <LocationSelector />
              <Confirm />
            </div>
          ) : ride[0].rideStatus == "Matched" ||
            ride[0].rideStatus == "Ongoing" ? (
            <div className={style.rideDetails}>
              <RideDetails />
            </div>
          ) : (
            <div className={style.rideDetails}>
              <NotMatchedRide />
            </div>
          )
        ) : driverRide.length == 0 ? (
          <div className={style.rideRequest}>
            <Hitches />
            <AcceptRides />
          </div>
        ) : (
          <div className={style.rideRequest}>
            <DriverDetails />
          </div>
        )}
      </div>
    </div>
  );
}
