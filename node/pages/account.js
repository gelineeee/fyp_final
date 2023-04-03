import React, { useEffect, useState } from "react";
import { useRido } from "../context/ridoContext";
import Navbar from "../components/Navbar";
import avatar from "../temp/avatar.jpg";
import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";
import factory from "../blockchain_utils/creator";
import web3 from "../blockchain_utils/web3";

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-black`,
};

export default function Account() {
  const { currentUser, setPoints } = useRido();
  const [balance, setBalance] = useState("");
  const [claim, setClaim] = useState("");
  const [totalPoints, setTotalPoints] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/db/getTotalPoints`);

        const data = await response.json();
        setTotalPoints(data.data[0].totalPoints);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const bal = await web3.eth.getBalance(
          "0x4c1a78137c1482aa2e8af3c69939111ef4109df8"
        );
        setBalance(web3.utils.fromWei(bal, "ether"));
        const claim = (currentUser.points / totalPoints) * parseFloat(balance);
        setClaim(claim.toFixed(6));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentUser.points, totalPoints, balance]);

  const claimRewards = async () => {
    try {
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      await factory.methods.claimReward(currentUser.points, totalPoints).send({
        from: accounts[0],
      });
      setPoints(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div>
        <Navbar />
      </div>
      <div class="flex flex-row justify-center my-auto space-x-[100px]">
        <section class="text-gray-800 text-center">
          <div class="mb-2">
            <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center">
              <div class="border-r border-b border-l border-stone-200 lg:border-l-1 lg:border-t lg:border-stone-200 bg-stone-200 rounded-lg lg:rounded-b-lg lg:rounded-lg p-16 justify-between leading-normal">
                <div class=" divide-x-2 divide-gray-500 flex flex-row space-x-[80px]">
                  <div class="mb-1 flex flex-col">
                    <div class="flex justify-center mb-3">
                      <Image
                        className={style.userImage}
                        src={avatar}
                        width={120}
                        height={120}
                        alt="User profile picture"
                      />
                    </div>
                    <h5 class="text-lg font-bold">{currentUser.name}</h5>
                    <h6 class="font-medium text-blue-600 mb-1">
                      {currentUser.accountType}
                    </h6>
                    <div class="flex justify-center mb-6">
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
                      <p class="mx-2 text-xs font-bold text-gray-900 dark:text-white">
                        {currentUser.rating}
                      </p>
                    </div>
                    <div class="flex flex-row">
                      <div>
                        <div class="text-gray-900 font-bold text-sm mb-2 flex flex-row mx-4">
                          Wallet Address:
                        </div>
                        <div class="text-gray-900 font-bold text-sm mb-2 flex flex-row mx-4">
                          Contact number:
                        </div>
                        <div class="text-gray-900 font-bold text-sm mb-2 flex flex-row mx-4">
                          Total points:
                        </div>
                        {currentUser.accountType == "Driver" ? (
                          <>
                            <div class="text-gray-900 font-bold text-sm mb-2 flex flex-row mx-4">
                              Car plate:
                            </div>
                            <div class="text-gray-900 font-bold text-sm flex flex-row mx-4">
                              Car model:
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div class="text-left ml-5">
                        <div class="font-semibold text-gray-900 text-sm mb-2">
                          {currentUser.walletAddress}
                        </div>
                        <div class="font-semibold text-gray-900 text-sm mb-2">
                          {currentUser.contactNumber}
                        </div>
                        <div class="font-semibold text-gray-900 text-sm mb-2">
                          {currentUser.points}
                        </div>
                        {currentUser.accountType == "Driver" ? (
                          <div>
                            <div class="font-semibold text-gray-900 text-sm mb-2">
                              {currentUser.carPlate}
                            </div>
                            <div class="font-semibold text-gray-900 text-sm mb-2">
                              {currentUser.carModel}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col justify-center pl-16">
                    <h5 class="mb-1 text-xl text-left font-medium text-gray-600 dark:text-white">
                      You are eligible to claim:
                    </h5>

                    <div class="flex flex-row ">
                      <h1 class="mb-1 mt-1 text-4xl font-medium text-red-500 dark:text-white">
                        {claim}
                      </h1>
                      <Image
                        src={ethLogo}
                        height={4}
                        width={65}
                        alt="ETH logo"
                        class="-ml-3"
                      />
                    </div>
                    <span class="text-sm mt-1  text-gray-500 dark:text-gray-500 flex flex-row">
                      / {parseFloat(balance).toFixed(6)}
                      <Image
                        src={ethLogo}
                        height={3}
                        width={30}
                        alt="ETH logo"
                        class="-ml-1"
                      />
                    </span>
                    <div class="mt-5">
                      {claim == 0 ? (
                        <div>
                          <button
                            disabled="disabled"
                            class="justify-center px-20 py-2 mt-3 text-sm font-medium text-white bg-blue-300 rounded-lg"
                          >
                            Not eligible
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => claimRewards()}
                          class="justify-center float-left px-20 py-2 mt-3 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-800"
                        >
                          Claim now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
