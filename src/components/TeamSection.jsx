import Chief from "./Chief";
import Container from "./Container";
import Cta from "./Cta";
import Heading2 from "./Heading2";
import Migration from "./Migration";
import Section from "./Section";
import Sentence from "./Sentence";

const TeamSection = () => {
  return (
    <Section>
      <Container>
        <Heading2>制作チームについて</Heading2>
        <Sentence>
          <p>
            イケテルシステムは、Web開発のプロフェッショナルが集うチームです。
            <br />
            代表の小野は、IT企業の役員として、CTO（最高技術責任者）を務めた経験があります。
            <br />
            経験豊富なリーダーが率いるチームですので、安心してお任せいただけます！
          </p>
        </Sentence>
        <Chief />
        <Migration />
        <Cta />
      </Container>
    </Section>
  );
};

export default TeamSection;
