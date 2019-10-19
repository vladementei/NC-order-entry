const request = require('request');

const sendFakeRequest = callback => new Promise((resolve, reject) => {
  setTimeout(() => {
    const requestNumber = increment();
    const response = `Request number: ${requestNumber}`;
    if (callback) {
      callbackProcess(response, callback, resolve, reject);
    } else {
      resolve(response);
    }
  }, 2000);
});

const getRequest = (url, callback) => new Promise((resolve, reject) => {
  const options = {
    url,
    headers: {
      'User-Agent': 'Chrome/77.0.3865.120',
    }
  };
  request(options, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (callback) {
        callbackProcess(data, callback, resolve, reject);
      } else {
        resolve(data);
      }
    } else {
      reject(error);
    }
  });
});

const increment = (() => {
  let quantity = 0;
  return () => ++quantity;
})();

const callbackProcess = (data, callbackFn, resolveFn, rejectFn) => {
  if (typeof callbackFn === 'function') {
    resolveFn(callbackFn(data));
  } else {
    rejectFn('argument is not a function!');
  }
};

module.exports = { sendFakeRequest, getRequest };
