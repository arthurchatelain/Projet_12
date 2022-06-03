import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from './Controller.js'

/**
 * Call the api
 * @param {number} id - The id of the user.
 * @param {string} cible - The part of the data we want to reach.
 */

export default function callApi(id, cible, needMock) {
  if (cible === undefined) cible = ''
  if (needMock === true) return mockApi(id, cible)
  console.log('Utilisation Api')
  return fetch('http://localhost:5000/user/' + id + cible)
    .then(data => data.json())
    .then(data => data.data)
    .catch(() => false)
}

const mockApi = (id, cible) => {
  const routes = {'/average-sessions': getUserAverageSession, '/activity': getUserActivityById, '/performance': getUserPerformance, '': getUserById }
  console.log('Utilisation Mock')
  return Promise.resolve(routes[cible](id))
}