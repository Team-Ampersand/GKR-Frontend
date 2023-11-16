import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { applicationId } from 'recoilAtoms'

const ApplicationId = (setapplicationId: any) => {
  const [id, setid] = useRecoilState(applicationId)

  useEffect(() => {
    setid(setapplicationId)
  }, [setapplicationId])

  console.log(id)
  return id
}

export default ApplicationId
