import { css } from "@emotion/react";

const Large = ({ children }) => {
  return <span css={styles.lg}>{children}</span>;
};

export default Large;

const styles = {
  lg: css`
    font-size: 1.25em;
  `,
};
