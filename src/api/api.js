const apiUrl = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
 return await fetch(`${apiUrl}/users`, {
    method: 'GET',
    headers: {
      'Authorization' : `${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': 'true',
    },
  }).then((response) => response.json())
  .then((response) => response.users)
  .catch((_) => {
    return []
  })
}

export const auth = async ({name, password}) => {
  let result = await fetch(`${apiUrl}/auth`, {
    method: 'POST',
    body: JSON.stringify({
      username : name,
      password : password
    }),
    headers: {
      'ngrok-skip-browser-warning': 'true',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
  .catch((_) => null)
  return result.result?.token ?? null
}

export const getUser = async (id) =>  {
  return await fetch(`${apiUrl}/user/${id}`, {
    method: 'GET',
    headers: {
      'Authorization' : `${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': 'true',
    },
  }).then((response) => response.json())
  .then((response) => response.user)
  .catch((_) => null)
}