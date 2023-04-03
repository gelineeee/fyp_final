import web3 from "./web3";
import Creator from "./Creator.json";

const instance = new web3.eth.Contract(
  JSON.parse(JSON.stringify(Creator.abi)),
  "0x4C1A78137C1482Aa2E8Af3c69939111ef4109DF8"
);

export default instance;

//0xc77BCbfC60C04B1c23FFf421826c17649b8699a5
