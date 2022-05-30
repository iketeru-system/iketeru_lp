import { css } from "@emotion/react";

const Explain = ({ children }) => {
  return <div css={styles.explain}>{children}</div>;
};
export default Explain;

const styles = {
  explain: css`
    margin-top: 64px;
  `,
};
