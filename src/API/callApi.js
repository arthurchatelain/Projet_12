export default function callApi(id, cible) {
    if (cible === undefined) cible = ''
    return fetch('http://localhost:5000/user/' + id + cible)
      .then(data => data.json())
      .then(data => data.data)
}