import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";
import { colors } from "../utilities/styleUtilities";

const Heading2 = ({ children }) => {
  return <h2 css={styles.h2}>{children}</h2>;
};

export default Heading2;

const styles = {
  h2: css`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 56px;
    ${mq.sm} {
      margin-bottom: 30px;
      font-size: 32px;
    }
    :after {
      content: "";
      display: block;
      width: 100px;
      height: 10px;
      background-color: ${colors.purple};
      margin: 10px auto 0;
    }
  `,
};
