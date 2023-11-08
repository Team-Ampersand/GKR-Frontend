import TokenManager from 'utils/apis/TokenManager'

const getToken = () => {
  const tokenManager = new TokenManager()

  const accessToken = tokenManager.accessToken
  const refreshToken = tokenManager.refreshToken

  return { accessToken, refreshToken }
}

export default getToken
