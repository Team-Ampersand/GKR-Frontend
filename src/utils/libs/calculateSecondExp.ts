export default function calculateSecondExp(Exp: string): number {
  const givenDate = new Date(Exp)

  const currentDate = new Date()
  const differenceInMilliseconds = givenDate.getTime() - currentDate.getTime()
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000)

  return differenceInSeconds
}
