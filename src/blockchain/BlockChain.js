import Block from './Block.js';
import moment from 'moment';

export default class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingData = [];
  }

  createGenesisBlock() {
    return new Block(moment().format('DD/MM/YYYY HH:mm:ss'), { message: 'Genesis block'}, '0');
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1 ];
  }

  createData(data) {
    this.pendingData.push(data);
  }

  minePendingData() {
    let block = new Block(moment().format('DD/MM/YYYY HH:mm:ss'), this.pendingData, this.getLastBlock().hash);
    block.mineBlock(this.difficulty);

    console.log('Block sucessfully mined');
    this.chain.push(block);
    this.pendingData = [];
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}