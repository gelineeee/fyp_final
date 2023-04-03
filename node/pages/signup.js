import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";

export default function Signin() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [carplate, setCarplate] = useState("");
  const [account, setAccount] = useState("Rider");
  const [reject, setReject] = useState(false);

  const {
    requestToGetCurrentUsersInfo,
    setCurrentUserAccountType,
    setCurrentAccount,
    notSignup,
    requestToCreateUserOnSanity,
  } = useRido();
  const router = useRouter();

  const message = [
    "This site is requesting your signature to approve login authorization!",
    "Please sign me in!",
  ].join("\n\n");

  const signup = async () => {
    setLoading(true);
    try {
      console.log(address);
      console.log(phone);
      console.log(username);

      setCurrentAccount(address);
      setCurrentUserAccountType(account);
      requestToGetCurrentUsersInfo(address);
      setLoading(false);
      try {
        const signature = await web3.eth.personal.sign(message, address);
        if (signature) {
          router.push("/");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setReject(true);
        setLoading(false);
      }
      requestToCreateUserOnSanity(
        address,
        username,
        phone,
        account,
        carModel,
        carplate
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const func = async () => {
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0].toLowerCase());
    };
    func();
    ethereum?.on("accountsChanged", handleAccountChange);
    return () => {
      ethereum?.removeListener("accountsChanged", handleAccountChange);
    };
  });

  const handleAccountChange = () => {
    const func = async () => {
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0].toLowerCase());
      router.push("/signin");
    };
    func();
  };

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  const resetRadioState = () => {
    setAccount("");
  };

  return (
    <div
      class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <form class="p-7 bg-white rounded-xl drop-shadow-lg relative">
        <button
          type="button"
          onClick={() => router.push("/signin")}
          class="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white border border-black hover:border-transparent rounded px-2 py-1 absolute left-7 top-8"
        >
          Back
        </button>
        <h1 class="text-4xl text-center text-black mb-6">RIDO</h1>
        {notSignup ? (
          <h1 class="text-center text-sm text-red-600 mb-3">
            This wallet address have not been registered. Sign up now!
          </h1>
        ) : (
          <></>
        )}
        <div class="md:flex flex-row mb-2 md:space-x-4 w-full text-xs">
          <p class="font-semibold text-sm text-gray-800 py-2">Account Type:</p>
          <div class="font-semibold text-sm text-gray-800 py-2">
            <input
              type="radio"
              value="Rider"
              checked={account === "Rider"}
              onChange={handleChange}
            />{" "}
            Rider
          </div>
          <div class="font-semibold text-sm text-gray-800 py-2">
            <input
              type="radio"
              value="Driver"
              checked={account === "Driver"}
              onChange={handleChange}
            />{" "}
            Driver
          </div>
          <div>
            <button type="reset" onClick={resetRadioState} />
          </div>
        </div>
        <div class="mb-2 space-y-2 w-full pt-3">
          <label class="font-semibold text-sm text-gray-800 py-2">
            Wallet Address:
          </label>
          <input
            placeholder="Your Wallet Address"
            class="appearance-none text-md block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded-lg h-10 px-4"
            required="required"
            type="text"
            disabled="disabled"
            name="address"
            id="address"
            value={address}
          />
          <p class="text-red text-xs hidden">Please fill out this field.</p>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full pt-3">
          <div class="mb-2 space-y-2 w-full">
            <label class="font-semibold text-sm text-gray-800 py-2">
              Name:
            </label>
            <input
              placeholder="Your Name"
              class="appearance-none text-md block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded-lg h-10 px-3"
              required="required"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-2 space-y-2 w-full">
            <label class="font-semibold text-gray-800 text-sm py-2">
              Phone:
            </label>
            <input
              placeholder="Your Phone Number"
              class="appearance-none text-md block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded-lg h-10 px-4"
              required="required"
              type="text"
              id="phone_number"
              name="phone_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        {account === "Driver" ? (
          <div class="md:flex flex-row md:space-x-4 w-full pt-3">
            <div class="mb-3 space-y-2 w-full">
              <label class="font-semibold text-sm text-gray-800 py-2">
                Car Model:
              </label>
              <input
                placeholder="Your Car Model"
                class="text-md appearance-none block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded-lg h-10 px-3"
                required="required"
                type="text"
                id="car_model"
                name="car_model"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
              <p class="text-red text-xs hidden">Please fill out this field.</p>
            </div>
            <div class="mb-3 space-y-2 w-full">
              <label class="font-semibold text-gray-800 text-sm py-2">
                Car Plate:
              </label>
              <input
                placeholder="Your Car Plate Number"
                class="appearance-none text-md block w-full bg-grey-lighter text-grey-darker border border-gray-500 rounded-lg h-10 px-4"
                required="required"
                type="text"
                id="carplate"
                name="carplate"
                value={carplate}
                onChange={(e) => setCarplate(e.target.value)}
              />
              <p class="text-red text-xs hidden">Please fill out this field.</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {reject ? (
          <h1 class="text-center text-sm text-red-600 mb-3">
            User declined message signature!
          </h1>
        ) : (
          <></>
        )}
        <div class="pt-5">
          {loading ? (
            <button
              class="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
              type="button"
            >
              Loading...
            </button>
          ) : (
            <>
              <button
                class="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
                type="button"
                onClick={() => signup()}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
