import { StaticImage } from "gatsby-plugin-image";
import { noFade } from "../utilities/styleUtilities";
import { mq } from "../utilities/styleUtilities";
import { css } from "@emotion/react";

const HeroBG = () => {
  return (
    <>
      <div css={styles.bg}>
        <StaticImage
          src="../../images/hero-bg.png"
          alt=""
          loading="eager"
          placeholder="none"
          layout="fullWidth"
          style={{ height: "100%" }}
        />
      </div>
      <div css={styles.left}>
        <StaticImage
          src="../../images/hero-left.png"
          alt=""
          loading="eager"
          placeholder="none"
          layout="fixed"
          width={280}
          height={184}
        />
      </div>
      <div css={styles.right}>
        <StaticImage
          src="../../images/hero-right.png"
          alt=""
          loading="eager"
          placeholder="none"
          layout="fixed"
          width={354}
          height={282}
        />
      </div>
    </>
  );
};

export default HeroBG;

const styles = {
  bg: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${noFade};
  `,
  left: css`
    position: absolute;
    bottom: 84px;
    right: calc(50% + 359px);
    ${noFade};
    ${mq.lgDown} {
      display: none !important;
    }
  `,
  right: css`
    position: absolute;
    bottom: 70px;
    left: calc(50% + 315px);
    ${noFade};
    ${mq.lgDown} {
      display: none !important;
    }
  `,
};
