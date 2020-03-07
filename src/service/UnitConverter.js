const axios = require("axios");

function getValueConverted(value1, unit1, value2, unit2) {
  return axios({
    method: "post",
    url: "http://localhost:8080/unitconverter",
    data: [
      {
        value: value1,
        unit: unit1
      },
      {
        value: value2,
        unit: unit2
      }
    ]
  });
}
export default getValueConverted;
