import _ from 'lodash';
import 'babel-polyfill';
import Chai from 'chai';
import ChaiAsPromised from 'chai-as-promised';
import Web3Utils from 'web3-utils';

import Oracle from '../src/oracle';
import TestConfig from './config/test_config';
import Mocks from './mock/oracle';

Chai.use(ChaiAsPromised);
const assert = Chai.assert;
const expect = Chai.expect;

const CENTRALIZED = 'centralized';
const DECENTRALIZED = 'decentralized';

describe('Oracle', function() {
  const contractAddress = 'a5b27c03e76d4cf10928120439fa96181f07520c';
  const oracleType = CENTRALIZED;

  describe('eventAddress()', function() {
    it('returns the eventAddress', function() {
      const res = Mocks.eventAddress.result;
      assert.isDefined(res[0]);
      assert.isTrue(_.isString(res[0]));
    });

    it('throws if contractAddress is undefined', function() {
      expect(Oracle.eventAddress({
        oracleType: oracleType,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if oracleType is undefined', function() {
      expect(Oracle.eventAddress({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', function() {
      expect(Oracle.eventAddress({
        contractAddress: contractAddress,
        oracleType: oracleType,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('consensusThreshold()', function() {
    it('returns the consensusThreshold', function() {
      const res = Mocks.consensusThreshold.result;
      assert.isDefined(res[0]);
      assert.isTrue(Web3Utils.isHex(res[0]));
    });

    it('throws if contractAddress is undefined', function() {
      expect(Oracle.consensusThreshold({
        oracleType: oracleType,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if oracleType is undefined', function() {
      expect(Oracle.consensusThreshold({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', function() {
      expect(Oracle.consensusThreshold({
        contractAddress: contractAddress,
        oracleType: oracleType,
      })).to.be.rejectedWith(Error);
    });
  });

  describe('finished()', function() {
    it('returns the finished flag', function() {
      const res = Mocks.finished.result;
      assert.isDefined(res[0]);
      assert.isBoolean(res[0]);
    });

    it('throws if contractAddress is undefined', function() {
      expect(Oracle.finished({
        oracleType: oracleType,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if oracleType is undefined', function() {
      expect(Oracle.finished({
        contractAddress: contractAddress,
        senderAddress: TestConfig.SENDER_ADDRESS,
      })).to.be.rejectedWith(Error);
    });

    it('throws if senderAddress is undefined', function() {
      expect(Oracle.finished({
        contractAddress: contractAddress,
        oracleType: oracleType,
      })).to.be.rejectedWith(Error);
    });
  });
});