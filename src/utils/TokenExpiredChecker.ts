const decodeToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1] // 페이로드 부분
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`
        })
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    return null
  }
}

const isTokenExpired = (token: string) => {
  const decoded = decodeToken(token)
  if (!decoded || !decoded.exp) {
    return true // 만료 시간이 없으면 만료된 것으로 간주
  }
  const currentTime = Math.floor(Date.now() / 1000) // 현재 시간 (초 단위)
  return decoded.exp < currentTime
}

export default isTokenExpired
