require("dotenv").config();

const verifySignature = ({ message, signature, address }) => {
  const _signerAddress = ethers.utils.verifyMessage(message, signature);
  if (_signerAddress == address) {
    return true;
  } else {
    return false;
  }
};

module.exports = { verifySignature };
