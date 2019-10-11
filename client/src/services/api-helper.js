const axios = require('axios');

//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://cafecoven-rails.herokuapp.com/'

const api = axios.create({
  baseURL: BASE_URL
})

export const loginUser = async (loginData) =>{
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
  }


export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}


export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const updateUser = async (data, id) => {
  console.log("the data is", data)
  const resp = await api.put(`/users/${id}`, {user: data})
  return resp.data
}

export const showMatches = async () => {
  const resp = await api.get(`/users`)
  return resp.data;
}

// export const showOneMatch = async (id) => {
//   const resp = await api(`/matches/${id}`)
//   return resp.data;
// }

//
// export const postFood = async (item) => {
//   const resp = await api.post(`/foods`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
//   return resp.data
// }
//
// export const putFood = async (item, id) => {
//   const resp = await api.put(`/foods/${id}`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item)
//   return resp.data
// }

// export const showFood = async () => {
//   const resp = await api.get(`/foods`)
//   return resp.data;
// }
//
// export const showFlavors = async () => {
//   const resp = await api.get(`/flavors`)
//   return resp.data;
// }
//
// export const showFoodItem = async (id) => {
//   const resp = await api(`/foods/${id}`)
//   return resp.data;
// }
//

// export const destroyFood = async (id) => {
//   const resp = await api.delete(`/foods/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
//   return resp.data;
// }
//
// export const putFoodFlavor = async (food_id, id) => {
//   const resp = await api.put(`/foods/${food_id}/flavors/${id}`, null, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
//   return resp.data
// }

// export const createUser = async (data) => {
//   try {
//     const user = await axios.post(`${BASE_URL}/users`, data);
//     return user.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };
//

// export const updateUser = async (data, id) => {
//   try {
//     const user = await api.put(`${BASE_URL}/users/${id}`, data);
//     return user.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };
//


//
// export const showArtists = async () => {
//   try {
//     const artists = await axios.get(`${BASE_URL}/artists`);
//     return artists.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };
//
//
// export const showOneArtist = async (id) => {
//   const resp = await api(`/artists/${id}`)
//   return resp.data;
// }
//


// export const destroyArtist = async (id) => {
//   try {
//     const artist = await axios.delete(`${BASE_URL}/artists/${id}`);
//     return artist.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };
