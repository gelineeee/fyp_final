import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "../temp/avatar.jpg";
import { BsPerson } from "react-icons/bs";
import { useRido } from "../context/ridoContext";
import web3 from "@/blockchain_utils/web3";
import { useRouter } from "next/router";

const style = {
  wrapper: `h-16 w-full bg-black text-white flex sticky top-0 z-50 md:justify-around items-center px-0 fixed`,
  leftMenu: `absolute left-8 flex gap-3`,
  logo: `text-4xl text-white flex cursor-pointer mr-10`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-5 items-center right-12 absolute`,
  userImage: `h-10 w-10 rounded-full object-cover`,
  loginButton: `flex items-center cursor-pointer rounded-lg bg-[#333333] px-3 py-1`,
  loginText: `ml-1 px-2`,
  logout: `flex flex-row`,
};

const Navbar = () => {
  const {
    currentAccount,
    connectWallet,
    currentUser,
    setCurrentAccount,
    setCurrentUser,
    currentUserAccountType,
    setDriverRide,
  } = useRido();
  const [address, setAddress] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   const func = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };
  //   func();
  // });

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
      setDriverRide([]);
      router.push("/signin");
    };
    func();
  };

  const logout = () => {
    setCurrentAccount();
    setCurrentUser([]);
    setDriverRide([]);
    router.push("/signin");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>RIDO</div>
        {currentUserAccountType == "Rider" ? (
          <div className={style.menuItem} onClick={() => router.push("/")}>
            Ride
          </div>
        ) : (
          <div className={style.menuItem} onClick={() => router.push("/")}>
            Drive
          </div>
        )}
        <div className={style.menuItem} onClick={() => router.push("/account")}>
          Account
        </div>
      </div>
      <div className={style.rightMenu}>
        {currentAccount ? (
          <>
            <Image
              className={style.userImage}
              src={avatar}
              width={40}
              height={40}
              alt="User profile picture"
            />
            <div>
              {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            </div>
            <div className={style.loginButton}>
              <BsPerson />
              <span className={style.loginText} onClick={() => logout()}>
                Log out
              </span>
            </div>
          </>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
