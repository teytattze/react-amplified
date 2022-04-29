const { randomUUID } = require('crypto');

exports.getId = () => {
  return randomUUID();
};
