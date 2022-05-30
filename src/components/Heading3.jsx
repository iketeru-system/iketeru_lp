import { colors } from "../utilities/styleUtilities";
import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";

const Heading3 = ({ children }) => {
  return <h3 css={styles.h3}>{children}</h3>;
};

export default Heading3;

const styles = {
  h3: css`
    font-size: 36px;
    line-height: 1.25;
    font-weight: bold;
    text-align: center;
    margin-top: 88px;
    margin-bottom: 50px;
    ${mq.sm} {
      margin-top: 50px;
      margin-bottom: 30px;
      font-size: 28px;
    }
    :after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      background-color: ${colors.purple};
      margin: 5px auto 0;
    }
  `,
};
