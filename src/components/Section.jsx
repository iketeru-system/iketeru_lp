import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";
import { colors } from "../utilities/styleUtilities";

const Section = ({ children, color, id = null }) => {
  const cls = color ? styles.section_purple : styles.section;
  return (
    <div css={cls} id={id}>
      {children}
    </div>
  );
};

export default Section;

const styles = {
  section: css`
    padding-top: 80px;
    padding-bottom: 80px;
    ${mq.sm} {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  `,
  section_purple: css`
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${colors.purple3};
    ${mq.sm} {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  `,
};
