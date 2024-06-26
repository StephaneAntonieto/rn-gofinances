//Native
import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";

//Context
import { useAuth } from "../../hooks/auth";

//Components
import { SigInSocialButton } from "../../components/SignInSocialButton";

//Images
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

//Styles
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from "./styles";

export function SignIn() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            Controle suas{'\n'}finanças de forma{'\n'}muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
            Faça seu login com{'\n'}umas das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SigInSocialButton title="Entrar com Google" svg={GoogleSvg}/>
          <SigInSocialButton title="Entrar com Apple" svg={AppleSvg}/>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
