import { createContext, use, useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

const RidoContext = createContext();

export const RidoProvider = ({ children }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  const [currentAccount, setCurrentAccount] = useState();
  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserAccountType, setCurrentUserAccountType] = useState("");
  const [selectedRide, setSelectedRide] = useState([]);
  const [price, setPrice] = useState();
  const [basePrice, setBasePrice] = useState();
  const [routes, setRoutes] = useState([]);
  const [ride, setRide] = useState([]);
  const [driverRide, setDriverRide] = useState([]);
  const [userDropoffCoordinates, setUserDropoffCoordinates] = useState();
  const [userPickupCoordinates, setUserPickupCoordinates] = useState();
  const [userRoutes, setUserRoutes] = useState([]);
  const [rider, setRider] = useState("");
  const [acceptRide, setAccceptedRide] = useState(false); // to check whether is true, if true then will call the update function
  const [cancelled, setCancelled] = useState(false);
  const [driverStart, setDriverStart] = useState(false);
  const [driverEnd, setDriverEnd] = useState(false);
  const [driverCancelled, setDriverCancelled] = useState(false);
  const [notSignup, setNotSignup] = useState(false);
  const [ridePoint, setRidePoint] = useState("");
  const [points, setPoints] = useState(false);
  const [signedIn, setSignedIn] = useState("");
  const router = useRouter();

  let metamask;

  if (typeof window !== "undefined") {
    metamask = window.ethereum;
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [signedIn]);

  useEffect(() => {
    if (!cancelled) return;
    updateCancelledRide();
  }, [cancelled]);

  useEffect(() => {
    if (!driverCancelled) return;
    updateDriverCancelledRide();
  }, [driverCancelled]);

  useEffect(() => {
    if (!ridePoint) return;
    updatePoint();
  }, [ridePoint]);

  useEffect(() => {
    if (!points) return;
    deductClaimedPoints();
  }, [points]);

  useEffect(() => {
    if (!driverStart) return;
    updateDriverStartRide();
  }, [driverStart]);

  useEffect(() => {
    if (!driverEnd) return;
    getPoint();
  }, [driverEnd]);

  useEffect(() => {
    if (!currentUserAccountType || currentUserAccountType == "Rider") return;
    requestToGetDriverRide(currentAccount);
  }, [currentUserAccountType]);

  useEffect(() => {
    if (!currentAccount) return;
    // requestToGetCurrentUsersInfo(currentAccount);
    requestToGetRides(currentAccount);
  }, [currentAccount]);

  useEffect(() => {
    if (!rider) return;
    requestToGetRidesForDriver(rider);
  }, [rider]);

  useEffect(() => {
    if (!acceptRide) return;
    updateRideStatus();
  }, [acceptRide]);

  useEffect(() => {
    if (ride.length != 0) {
      (async () => {
        await Promise.all([
          createLocationCoordinateForUserPromise(ride[0].pickup, "pickup"),
          createLocationCoordinateForUserPromise(ride[0].dropoff, "dropoff"),
        ]);
      })();
    } else return;
  }, [ride]);

  useEffect(() => {
    if (driverRide.length != 0) {
      (async () => {
        await Promise.all([
          createLocationCoordinateForUserPromise(
            driverRide[0].pickup,
            "pickup"
          ),
          createLocationCoordinateForUserPromise(
            driverRide[0].dropoff,
            "dropoff"
          ),
        ]);
      })();
    } else return;
  }, [driverRide]);

  useEffect(() => {
    if (!userPickupCoordinates || !userDropoffCoordinates) return;
    (async () => {
      try {
        const response = await fetch("/api/map/getDirection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickupCoordinates: `${userPickupCoordinates[0]},${userPickupCoordinates[1]}`,
            dropoffCoordinates: `${userDropoffCoordinates[0]},${userDropoffCoordinates[1]}`,
          }),
        });

        const data = await response.json();
        setUserRoutes(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [userPickupCoordinates, userDropoffCoordinates]);

  useEffect(() => {
    if (!pickupCoordinates || !dropoffCoordinates) return;
    (async () => {
      try {
        const response = await fetch("/api/map/getDuration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickupCoordinates: `${pickupCoordinates[0]},${pickupCoordinates[1]}`,
            dropoffCoordinates: `${dropoffCoordinates[0]},${dropoffCoordinates[1]}`,
          }),
        });

        const data = await response.json();
        setBasePrice(Math.round(await data.data));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pickupCoordinates, dropoffCoordinates]);

  useEffect(() => {
    if (!pickupCoordinates || !dropoffCoordinates) return;
    (async () => {
      try {
        const response = await fetch("/api/map/getDirection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickupCoordinates: `${pickupCoordinates[0]},${pickupCoordinates[1]}`,
            dropoffCoordinates: `${dropoffCoordinates[0]},${dropoffCoordinates[1]}`,
          }),
        });

        const data = await response.json();
        setRoutes(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pickupCoordinates, dropoffCoordinates]);

  const checkIfWalletIsCreated = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      requestToGetCurrentUsersInfo(addressArray[0]);

      if (currentUser) {
        router.push("/");
        setCurrentAccount(currentUser.walletAddress);
      } else {
        router.push("/signin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        requestToGetCurrentUsersInfo(addressArray[0]);
        // requestToCreateUserOnSanity(addressArray[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return;
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0]);
        // requestToCreateUserOnSanity(addressArray[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createLocationCoordinateForUserPromise = (
    locationName,
    locationType
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("api/map/getLocationCoordinates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: locationName,
          }),
        });

        const data = await response.json();

        if (data.message === "success") {
          switch (locationType) {
            case "pickup":
              setUserPickupCoordinates(data.data);
              break;
            case "dropoff":
              setUserDropoffCoordinates(data.data);
              break;
          }
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        console.error(error);
        reject();
      }
    });
  };

  const createLocationCoordinatePromise = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("api/map/getLocationCoordinates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: locationName,
          }),
        });

        const data = await response.json();

        if (data.message === "success") {
          switch (locationType) {
            case "pickup":
              setPickupCoordinates(data.data);
              break;
            case "dropoff":
              setDropoffCoordinates(data.data);
              break;
          }
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        console.error(error);
        reject();
      }
    });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      (async () => {
        await Promise.all([
          createLocationCoordinatePromise(pickup, "pickup"),
          createLocationCoordinatePromise(dropoff, "dropoff"),
        ]);
      })();
    } else return;
  }, [pickup, dropoff]);

  const requestToCreateUserOnSanity = async (
    address,
    username,
    phone,
    account,
    carModel,
    carplate
  ) => {
    if (!window.ethereum) return;
    try {
      await fetch("/api/db/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userWalletAddress: address,
          name: username,
          contactNumber: phone,
          accountType: account,
          carModel: carModel,
          carPlate: carplate,
        }),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const requestToGetCurrentUsersInfo = async (walletAddress) => {
    try {
      const response = await fetch(
        `/api/db/getUserInfo?walletAddress=${walletAddress}`
      );

      const data = await response.json();
      setCurrentUser(data.data);
      console.log(data.data);
      setCurrentUserAccountType(data.data.accountType);
    } catch (error) {
      console.error(error);
    }
  };

  const requestToGetRides = async (walletAddress) => {
    try {
      console.log(walletAddress);
      const response = await fetch(
        `/api/db/getRides?walletAddress=${walletAddress}`
      );

      const data = await response.json();
      console.log(data);
      setRide(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const requestToGetRidesForDriver = async (walletAddress) => {
    try {
      console.log(walletAddress);
      const response = await fetch(
        `/api/db/getRides?walletAddress=${walletAddress}`
      );

      const data = await response.json();
      console.log(data);
      setAccceptedRide(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const requestToGetDriverRide = async (walletAddress) => {
    try {
      console.log(walletAddress);
      const response = await fetch(
        `/api/db/getDriverRides?walletAddress=${walletAddress}`
      );

      const data = await response.json();
      console.log(data);
      setDriverRide(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateRideStatus = async () => {
    try {
      await fetch("/api/db/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: acceptRide[0]._id,
          driver: currentAccount,
          rideStatus: "Matched",
        }),
      });
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCancelledRide = async () => {
    try {
      await fetch("/api/db/updateRiderCancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: ride[0]._id,
          rideStatus: "Cancelled",
        }),
      });
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateDriverCancelledRide = async () => {
    try {
      await fetch("/api/db/updateRiderCancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: driverRide[0]._id,
          rideStatus: "Created",
        }),
      });
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateDriverStartRide = async () => {
    try {
      await fetch("/api/db/updateRiderCancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: driverRide[0]._id,
          rideStatus: "Ongoing",
        }),
      });
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getPoint = async () => {
    try {
      console.log(driverRide[0].rideCategory);
      const response = await fetch(
        `/api/db/getRidePoint?title=${driverRide[0].rideCategory}`
      );

      const data = await response.json();
      console.log(data);
      setRidePoint(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deductClaimedPoints = async () => {
    try {
      const deductPoints = currentUser.points;
      await fetch("/api/db/deductUserPoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: currentUser.walletAddress,
          points: 0,
        }),
      });
      console.log("Done user");

      await fetch("/api/db/deductTotalPoints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: "d2e589df-c4bd-4364-bea7-a5f46f1a345e",
          points: deductPoints,
        }),
      });
      console.log("Done points");

      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePoint = async () => {
    try {
      await fetch("/api/db/updateUserPoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: driverRide[0].driver._ref,
          points: ridePoint[0].pointsEarned,
        }),
      });
      console.log("Done driver");

      await fetch("/api/db/updateUserPoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: driverRide[0].passenger._ref,
          points: ridePoint[0].pointsEarned,
        }),
      });
      console.log("Done rider");

      console.log(ridePoint[0].pointsEarned * 2);
      await fetch("/api/db/updateTotalPoints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: "d2e589df-c4bd-4364-bea7-a5f46f1a345e",
          points: ridePoint[0].pointsEarned * 2,
        }),
      });
      console.log("Done points");

      await fetch("/api/db/updateRiderCancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: driverRide[0]._id,
          rideStatus: "Ended",
        }),
      });

      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValues = {
    pickup,
    setPickup,
    dropoff,
    setDropoff,
    pickupCoordinates,
    setPickupCoordinates,
    dropoffCoordinates,
    setDropoffCoordinates,
    connectWallet,
    currentAccount,
    setCurrentAccount,
    currentUser,
    setCurrentUser,
    price,
    selectedRide,
    setSelectedRide,
    setPrice,
    basePrice,
    metamask,
    routes,
    ride,
    userDropoffCoordinates,
    userPickupCoordinates,
    userRoutes,
    rider,
    setRider,
    setRide,
    driverRide,
    setDriverRide,
    setCancelled,
    setCurrentUserAccountType,
    currentUserAccountType,
    notSignup,
    setNotSignup,
    requestToCreateUserOnSanity,
    requestToGetCurrentUsersInfo,
    driverCancelled,
    setDriverCancelled,
    driverStart,
    setDriverStart,
    driverEnd,
    setDriverEnd,
    setPoints,
    setSignedIn,
  };

  return (
    <RidoContext.Provider value={contextValues}>
      {children}
    </RidoContext.Provider>
  );
};

export function useRido() {
  return useContext(RidoContext);
}
