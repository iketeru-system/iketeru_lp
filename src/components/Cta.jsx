import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";
import { StaticImage } from "gatsby-plugin-image";
import ScrollButton from "./ScrollButton";

const Cta = ({ hideBtn = false }) => {
  return (
    <div>
      <div css={styles.pcBanner}>
        <StaticImage
          src="../../images/banner.png"
          alt="創業キャンペーン実施中！ 通常価格¥100,000〜 → 先着3件限定 ¥30,000〜！"
          width={1000}
          height={437}
        />
      </div>
      <div css={styles.spBanner}>
        <StaticImage
          src="../../images/banner-sp.png"
          alt="創業キャンペーン実施中！ 通常価格¥100,000〜 → 先着3件限定 ¥30,000〜！"
        />
      </div>
      {hideBtn || (
        <div css={styles.btnBox}>
          <ScrollButton target="estimate">無料お見積もりはこちら</ScrollButton>
        </div>
      )}
    </div>
  );
};

export default Cta;

const styles = {
  pcBanner: css`
    ${mq.sm} {
      display: none;
    }
  `,
  spBanner: css`
    text-align: center;
    ${mq.smUp} {
      display: none;
    }
  `,
  btnBox: css`
    margin-top: 50px;
    text-align: center;
  `,
};
