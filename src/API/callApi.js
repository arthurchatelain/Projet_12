/**
 * Call the api
 * @param {number} id - The id of the user.
 * @param {string} cible - The part of the data we want to reach.
 */

export default function callApi(id, cible) {
  if (cible === undefined) cible = ''
  return fetch('http://localhost:5000/user/' + id + cible)
    .then(data => data.json())
    .then(data => data.data)
    .catch(() => false)
}            