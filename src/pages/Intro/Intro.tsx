import * as S from '@/pages/Intro/Intro.style';

import googleLogin from '@/assets/login/google_login.png';
import kakaoLogin from '@/assets/login/kakao_login.png';
import naverLogin from '@/assets/login/naver_login.png';
import Logo from '@/assets/logo/mzbr_logo_secondary.svg';

const Intro = () => {
  return (
    <S.IntroWrapper>
      <Logo />
      <S.LoginContainer>
        <S.LoginImage src={kakaoLogin} />
        <S.LoginImage src={googleLogin} />
        <S.LoginImage src={naverLogin} />
      </S.LoginContainer>
    </S.IntroWrapper>
  );
};

export default Intro;
