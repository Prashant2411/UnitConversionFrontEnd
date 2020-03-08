const axios = require("axios");

function getUnits(unitType) {
    return axios({
        method: "get",
        url: "http://localhost:8080/getunits/"+unitType,
    })
}

export default getUnits