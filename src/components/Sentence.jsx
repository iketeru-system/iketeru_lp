import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";

const Sentence = ({ children, center = false }) => {
  const cls = center ? styles.sentence_center : styles.sentence;
  return <div css={cls}>{children}</div>;
};

export default Sentence;

const styles = {
  sentence: css`
    font-size: 22px;
    line-height: 1.6;
    text-align: center;
    ${mq.sm} {
      font-size: 18px;
    }
    p {
      :nth-child(n + 2) {
        margin-top: 30px;
      }
    }
  `,
  sentence_center: css`
    font-size: 22px;
    line-height: 1.6;
    text-align: center;
    ${mq.sm} {
      font-size: 18px;
    }
    p {
      :nth-child(n + 2) {
        margin-top: 30px;
      }
    }
  `,
};
