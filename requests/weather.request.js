const rp = require("request-promise");

module.exports = async (city) => {
  if (!city) throw new Error("Имя города не может быть пустым");
  const KEY = "14f951c92e2947133f3f248d4a28bd48";
  const uri = "https://api.openweathermap.org/data/2.5/weather";

  const options = {
    uri,
    qs: {
      q: city,
      appid: KEY,
      units: "imperial",
    },
    json: true,
  };

  try {
    const data = await rp(options);
    const celsius = ((data.main.temp - 32) * 5) / 9;
    return {
      weather: `${data.name}: ${celsius.toFixed(0)}`,
      error: null,
    };
  } catch (error) {
    return {
      error: error.error.message,
    };
  }
};
