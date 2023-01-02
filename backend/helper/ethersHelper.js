const ethers = require("ethers");

const verifySignature = ({ message, signature, address }) => {
  const _signerAddress = ethers.utils.verifyMessage(message, signature);
  if (_signerAddress == address) {
    return true;
  } else {
    console.log("not verified");
    return false;
  }
};

module.exports = { verifySignature };
