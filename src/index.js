import Blockchain from './blockchain/BlockChain.js';
import Data from './blockchain/Data.js';

const blockChain = new Blockchain();

blockChain.createData(new Data({
  id: '10012',
  name: 'Thiago Vasconcellos',
  age: 32
}));

blockChain.createData(new Data({
  id: '10015',
  name: 'Assa',
  age: 223,
  payload: {
    id: 1,
    other: [1,2,3,4,5]
  }
}));

blockChain.minePendingData();

console.log(JSON.stringify(blockChain, null, 2));
