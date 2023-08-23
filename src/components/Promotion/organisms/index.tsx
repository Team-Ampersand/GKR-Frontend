import GauthLoginButton from '../atom/GauthLoginButton';
import Header from '../atom/Header';
import { Wrapper } from './style';

const Promotion = () => {
  return (
    <Wrapper>
      <Header />
      <GauthLoginButton onClick={() => console.log('login')} />
    </Wrapper>
  );
};

export default Promotion;
