var volumeSetup = function () {
  // setup volume unit interface
  var volumeUnit = window.APP.util.getSettings("ticker_vol_unit").toUpperCase();
  var element = getElementByVolumeUnit(volumeUnit);
  if (element) {
    element.prop("checked", true);
  }
  // override currencies list
  var result = window.APP.util.initCurrenciesList();
  return result;
};

function getElementByVolumeUnit(volumeUnit) {
  let element = null;
  switch (volumeUnit) {
    case "FIRSTCCY":
      element = $("#tickervolccy_0");
      break;
    case "USD":
      element = $("#tickervolccy_USD");
      break;
    case "BTC":
      element = $("#tickervolccy_BTC");
      break;
    case "ETH":
      element = $("#tickervolccy_ETH");
      break;
    default:
      element = null;
      break;
  }
  return element;
}
