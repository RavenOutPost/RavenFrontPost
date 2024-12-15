export const getUsers = async () => {
 return await fetch('https://8418-85-169-182-214.ngrok-free.app/users', {
    method: 'GET',
    headers: {
      'Authorization' : `${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': 'true',
    },
  }).then((response) => response.json())
  .then((response) => response.users)
  .catch((_) => [])
}

export const auth = async ({name, password}) => {
  let result = await fetch('https://8418-85-169-182-214.ngrok-free.app/auth', {
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
  return await fetch(`https://8418-85-169-182-214.ngrok-free.app/user/${id}`, {
    method: 'GET',
    headers: {
      'Authorization' : `${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': 'true',
    },
  }).then((response) => response.json())
  .then((response) => response.user)
  .catch((_) => null)
}