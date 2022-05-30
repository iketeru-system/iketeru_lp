import { css } from "@emotion/react";
import { colors } from "../utilities/styleUtilities";

const Marker = ({ children }) => {
  return <span css={styles.marker}>{children}</span>;
};

export default Marker;

const styles = {
  marker: css`
    font-weight: bold;
    background-image: linear-gradient(transparent 60%, ${colors.yellow} 60%);
  `,
};
