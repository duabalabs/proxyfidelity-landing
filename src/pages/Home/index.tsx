import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ValuesContent from "../../content/ValuesContent.json";
import ProxyContent from "../../content/ProxyContent.json";
import InvestContent from "../../content/InvestContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ServiceSection = lazy(() => import("../../components/ServiceSection"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        imageSrc="/assets/img/landing.webp"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="right"
        title={ProxyContent.title}
        content={ProxyContent.text}
        imageSrc={ProxyContent.imageSrc}
        icon="product-launch.svg"
        id="about2"
      />
      <ContentBlock
        direction="left"
        title={InvestContent.title}
        content={InvestContent.text}
        imageSrc={InvestContent.imageSrc}
        icon="waving.svg"
        id="about3"
      />
      <ContentBlock
        direction="right"
        title={ValuesContent.title}
        content={ValuesContent.text}
        section={ValuesContent.section}
        icon="graphs.svg"
        imageSrc={ValuesContent.imageSrc}
        id="our-values"
      />
      <ServiceSection id="services" />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
