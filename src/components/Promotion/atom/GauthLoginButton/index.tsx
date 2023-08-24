import styled from '@emotion/styled';
import GauthLogo from 'asset/svg/GauthLogo.svg';

const GauthLoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <GauthLogo />
      Sign in with GAuth
    </Button>
  );
};

const Button = styled.button`
  max-width: 440px;
  width: 100%;
  max-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.875rem 4.3rem;
  background: none;
  color: #2e80cc;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #454e5b;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default GauthLoginButton;
