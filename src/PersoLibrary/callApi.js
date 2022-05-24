let axios = require('axios')

export default function callApi(id, cible) {
    if (cible === undefined) cible = ''
    return axios.get('http://localhost:5000/user/' + id + cible).then(resp => resp.data.data)
}