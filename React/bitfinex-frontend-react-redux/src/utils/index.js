export const generateUrl = (url, params = {}) => {
  let finalURL = url;
  let queryParams = [];
  // checking params should be object only
  if (params && params.constructor === Object) {
    Object.keys(params).forEach((key) => {
      if (params[key]) queryParams.push(key + params[key]);
    });
    if (queryParams.length > 0) {
      finalURL += `?${queryParams.join("&")}`;
    }
  }
  return finalURL;
};
