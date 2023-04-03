import web3 from "./web3";
import Hitch from "./Hitch.json";

const HitchInstance = (address) => {
  return new web3.eth.Contract(JSON.parse(JSON.stringify(Hitch.abi)), address);
};

export default HitchInstance;
