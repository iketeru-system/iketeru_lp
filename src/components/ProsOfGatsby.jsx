import SubSection from "./SubSection";
import Heading3 from "./Heading3";
import Cards from "./Cards";
import Explain from "./Explain";
import Sentence from "./Sentence";
import Marker from "./Marker";
import Card from "./Card";
import Icon1 from "../inline-svg/pros-icon1.svg";
import Icon2 from "../inline-svg/pros-icon2.svg";
import Icon3 from "../inline-svg/pros-icon3.svg";

const ProsOfGatsby = () => {
  return (
    <SubSection>
      <Heading3>Gatsbyのメリット</Heading3>
      <Cards>
        <Card icon={<Icon1 />} title="高速">
          <p>
            GatsbyはWordPressと違い、事前にサイトに表示する情報（HTML）をビルドする方式です。
          </p>
          <p>
            サーバー上でプログラムを実行する必要がないため、高速にサイトを表示することができます。
          </p>
        </Card>
        <Card icon={<Icon2 />} title="セキュリティの強化">
          <p>
            Gatsbyはサーバー上でプログラムを実行しません。そのため、ハッカーにとっては攻撃しにくいという特徴があります。
          </p>
          <p>
            もちろん100%安全とは言い切れませんが、WordPressと比べると、格段にセキュリティリスクが低いと言えます。
          </p>
        </Card>
        <Card icon={<Icon3 />} title="サーバーコストの削減">
          <p>
            Gatsbyはサーバー上でPHPなどのプログラムを実行する必要がありません。そのため、一般的なレンタルサーバーではなく、必要最低限の機能を備えたホスティングサービスを利用することができます。
          </p>
          <p>アクセスの多いサイトでなければ、無料枠で利用可能です。</p>
        </Card>
      </Cards>
      <Explain>
        <Sentence>
          <p>
            Gatsbyは、主に<Marker>海外で普及し始め</Marker>ており、
            インターネット事業者のホームページや、ビジネスニュースを配信するサイトなどで採用されています。
            いずれも、サイトの高速化に成功しています。
          </p>
          <p>
            日本では、まだ導入事例が少ないものの、着実に
            <Marker>導入事例が増え始め</Marker>ています。
            <br />
            いち早く新しい技術を導入し、<Marker>高速でセキュア</Marker>
            なサイトを構築しませんか？
          </p>
        </Sentence>
      </Explain>
    </SubSection>
  );
};

export default ProsOfGatsby;
