const largeNumber = 356;
module.exports = largeNumber;

function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toISOString();
  }
  
  module.exports = getCurrentDateTime;
  