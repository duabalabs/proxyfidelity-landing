import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { Button } from "../../common/Button";
import { navigateToDashboard } from "../../common/utils/helper";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.duabalabs@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Application Security")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col> */}

            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Accra, Ghana</Para>
              <Para>+233 24 532 2130</Para>
              {/* <Para>2131 Elk Street</Para> */}
              {/* <Para>California</Para> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer aria-label="homepage">
                <h3
                  className="ant-typography"
                  style={{ fontSize: "1.5rem", fontWeight: 700 }}
                >
                  ProxyFidelity
                </h3>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="" src="github.svg" />
              <SocialLink href="" src="twitter.svg" />
              <SocialLink href="" src="linkedin.svg" />
              <SocialLink href="" src="medium.svg" />
              <Button onClick={navigateToDashboard}>
                {"Go To My Projects"}
              </Button>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer) as any;
