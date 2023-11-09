const createEnv = (env: string) => `process.env.NEXT_PUBLIC_${env}`

export const baseUrl = createEnv('BASE_URL')
