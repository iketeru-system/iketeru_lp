import { colors } from "../utilities/styleUtilities";
import { mq } from "../utilities/styleUtilities";
import { css } from "@emotion/react";
import { SP_PADDING } from "../utilities/styleUtilities";
import HeroBG from "./HeroBG";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  return (
    <div css={styles.outer}>
      <HeroBG />
      <div css={styles.inner}>
        <h1 css={styles.title}>
          まだWordPressを
          <br />
          ご利用の方、必見！！
        </h1>
        <p css={styles.catchcopy}>
          あなたのサイト、
          <br />
          もっと高速に、
          <br />
          もっとセキュリティを強固に。
        </p>
        <div css={styles.btnBox}>
          <ScrollButton target="estimate">無料お見積もりはこちら</ScrollButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  outer: css`
    position: relative;
    height: 718px;
    background-color: ${colors.purple3};
    ${mq.sm} {
      height: 430px;
    }
  `,
  inner: css`
    position: relative;
    padding-top: 120px;
    ${mq.sm} {
      padding-top: 60px;
    }
  `,
  title: css`
    font-size: 64px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    ${mq.sm} {
      font-size: 32px;
    }
  `,
  catchcopy: css`
    margin-top: 24px;
    font-size: 30px;
    line-height: 1.6;
    text-align: center;
    ${mq.sm} {
      font-size: 20px;
    }
  `,
  btnBox: css`
    padding: 0 ${SP_PADDING};
    margin-top: 25px;
    text-align: center;
  `,
};
