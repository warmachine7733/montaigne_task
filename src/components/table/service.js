// export const getData = async () => {
//   const API_URL = "http://api.jsonbin.io/b/5b893aa03ffac56f4bd7905a";
//   const rawData = await fetch(API_URL);
//   const processedData = await rawData.json();
//   return processedData;
// };

export const getData = async () => {
  let API_URL = "http://api.jsonbin.io/b/5b893aa03ffac56f4bd7905a";
  let method = "GET";
  let obj = {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };

  const getCount = await fetch(API_URL, obj);
  return await getCount.json();
};
