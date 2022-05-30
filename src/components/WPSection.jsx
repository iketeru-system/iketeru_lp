import Container from "./Container";
import Heading2 from "./Heading2";
import Section from "./Section";
import Explain from "./Explain";
import Sentence from "./Sentence";
import ToFootnote from "./ToFootnote";
import ConsOfWP from "./ConsOfWP";
import Large from "./Large";
import Marker from "./Marker";

const WPSection = () => {
  return (
    <Section>
      <Container>
        <Heading2>
          WordPress
          <ToFootnote />
          の時代は終わった。
        </Heading2>
        <Sentence>
          <p>
            WordPressは、ホームページを簡単に作成することができるすばらしいシステムです。
            <br />
            ここまでWebが普及したのは、WordPressの貢献によるところが大きいでしょう。
            <br />
            しかし、近年、WordPressのセキュリティに対する不安や、スピード面での課題が問題視されるようになってきました。
          </p>
        </Sentence>
        <ConsOfWP />
        <Explain>
          <Sentence center>
            <p>
              速度面やセキュリティ面で不安のあるWordPress、あなたは使い続けますか？
            </p>
            <p>
              それでもWordPressを使い続けたいという方は
              <br />
              <Large>
                <Marker>ここから先は読む必要はありません</Marker>
              </Large>
            </p>
          </Sentence>
        </Explain>
      </Container>
    </Section>
  );
};

export default WPSection;
