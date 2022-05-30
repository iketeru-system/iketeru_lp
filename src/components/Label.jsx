import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";
import { colors } from "../utilities/styleUtilities";

const Label = ({ htmlFor, labelText, required = false, comment = null }) => {
  return (
    <label htmlFor={htmlFor} css={styles.label}>
      {labelText}
      {required && <span css={styles.required}>必須</span>}
      {comment && <span css={styles.comment}>{comment}</span>}
    </label>
  );
};

export default Label;

const styles = {
  label: css`
    display: block;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    ${mq.sm} {
      font-size: 18px;
    }
  `,
  required: css`
    display: inline-block;
    margin-left: 20px;
    padding: 2px 20px;
    border-radius: 4px;
    background-color: ${colors.red};
    color: ${colors.white};
    font-size: 18px;
    ${mq.sm} {
      font-size: 16px;
    }
  `,
  comment: css`
    margin-left: 5px;
    font-size: 18px;
    font-weight: normal;
    ${mq.sm} {
      font-size: 14px;
    }
  `,
};
