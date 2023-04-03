import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";
import { sendEtagResponse } from "next/dist/server/send-payload";

export default function Signin() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState("");
  const [reject, setReject] = useState(false);
  const {
    setCurrentUser,
    setCurrentUserAccountType,
    setCurrentAccount,
    setNotSignup,
    setDriverRide,
    setRide,
    setSignedIn,
  } = useRido();
  const router = useRouter();

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
    };
    func();
  };

  const message = [
    "This site is requesting your signature to approve login authorization!",
    "Please sign me in!",
  ].join("\n\n");

  const connectWallet = async () => {
    setLoading(true);
    setReject(false);
    try {
      console.log(address);
      const response = await fetch(
        `/api/db/getUserInfo?walletAddress=${address}`
      );

      const data = await response.json();

      console.log(data);

      if (data.data) {
        setCurrentUser(data.data);
        setCurrentAccount(data.data.walletAddress);
        setCurrentUserAccountType(data.data.accountType);
        try {
          const signature = await web3.eth.personal.sign(message, address);
          if (signature) {
            setSignedIn(address);
            router.push("/");
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
          setReject(true);
          setLoading(false);
        }
      } else {
        setNotSignup(true);
        router.push("/signup");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signup = () => {
    setNotSignup(false);
    router.push("/signup");
  };

  return (
    <div
      class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
    >
      <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5">
        <h1 class="text-center text-4xl text-black">RIDO</h1>
        <h1 class="text-center text-md text-black">Sign in to your account</h1>
        <div class="flex flex-col space-y-2">
          <label class="text-sm font-normal" for="password">
            Your Current Wallet Address:
          </label>
          <input
            class="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="text"
            disabled="disabled"
            placeholder="Your Wallet Address"
            name="address"
            id="address"
            value={address}
            onClick={() => getAccounts()}
          />
        </div>
        {reject ? (
          <h1 class="text-center text-sm text-red-600 mb-3">
            User declined message signature!
          </h1>
        ) : (
          <></>
        )}
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
              onClick={() => connectWallet()}
            >
              Connect Wallet
            </button>
            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
              <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <button
              class="w-full px-10 py-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
              type="button"
              onClick={() => signup()}
            >
              Sign up
            </button>
          </>
        )}
      </form>
    </div>
  );
}
