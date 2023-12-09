import * as S from './style'
import * as I from 'asset/svg'

const GauthLoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <S.Button onClick={onClick}>
      <I.GauthLogo />
      Sign in with GAuth
    </S.Button>
  )
}

export default GauthLoginButton
