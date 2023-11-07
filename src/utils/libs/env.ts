const createEnv = (env: string) => `process.env.NEXT_PUBLIC_${env}`

export const baseUrl = createEnv('BASE_URL')

export const clientId = createEnv('CLIENT_ID')

export const clientSecret = createEnv('CLIENT_SECRET')

export const redirectUri = createEnv('REDIRECT_URI')
