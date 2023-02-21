require('dotenv').config({path: '../.env'});
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

console.log("Address of deployed contract: "+process.env.CONTRACT_DEPLOYED_ADDRESS);

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), process.env.CONTRACT_DEPLOYED_ADDRESS);

export default instance;