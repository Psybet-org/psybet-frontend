import type { AbiItem } from 'web3-utils';
import type { Contract } from 'web3-eth-contract';
import ethereumClient from '../ethereumClient';
import contractJSON from '@zencats/contracts/build/contracts/ZenCats.json';
// import { ZENCATS_CONTRACT_ADDRESS } from '@/config';

const { abi } = contractJSON;

let contract: null | Contract = null;
let isInitialing = false;
let onInitializedFns: Function[] = [];

function onInitialized(fn: () => void) {
  onInitializedFns.push(fn);
}

function initialized() {
  onInitializedFns.forEach((fn) => fn());

  onInitializedFns = [];
}

async function init() {
  isInitialing = true;
  const client = await ethereumClient.get();
  const myContract = new client.eth.Contract(abi as unknown as AbiItem,"0xD7b287f8Ef807fce5949EC64c316985b97171cD7");
  // const myContract = new client.eth.Contract();
  contract = myContract;
  isInitialing = false;

  initialized();
  return contract;
}

async function get(): Promise<Contract> {
  if (contract) return contract;

  if (!isInitialing) {
    init();
  }
  return new Promise((resolve) => {
    onInitialized(() => resolve(contract as Contract));
  });
}

const zencatsContract = {
  get,
};

export default zencatsContract;
