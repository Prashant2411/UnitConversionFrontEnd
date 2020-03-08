const axios = require("axios");

function getUnitType() {
    return axios({
        method: "get",
        url: "http://localhost:8080/getunittype",
    })
}

export default getUnitType