export const getChartData = async () => {
  let API_URL = "https://api.jsonbin.io/b/5b893b00db948c68635a04eb";
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
