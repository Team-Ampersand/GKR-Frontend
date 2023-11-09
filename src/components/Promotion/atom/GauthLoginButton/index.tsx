import styled from '@emotion/styled'
import * as I from 'asset/svg'

const GauthLoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <I.GauthLogo />
      Sign in with GAuth
    </Button>
  )
}

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.875rem 4.3rem;
  background: #2e80cc;
  color: #fff;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

export default GauthLoginButton
