import { css } from "@emotion/react";
import { mq } from "../utilities/styleUtilities";

const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false,
  registerReturn,
}) => {
  if (!multiLine) {
    return (
      <input
        type="text"
        id={id}
        name={name}
        css={styles.input}
        placeholder={placeholder}
        {...registerReturn}
      />
    );
  } else {
    return (
      <textarea
        id={id}
        name={name}
        css={styles.textarea}
        placeholder={placeholder}
        {...registerReturn}
      />
    );
  }
};

export default Textbox;

const styles = {
  input: css`
    width: 100%;
    padding: 15px;
    border-radius: 0;
    border: 1px solid $black;
    font-size: 22px;
    line-height: 1.6;
    font-family: inherit;
    ${mq.sm} {
      padding: 10px;
      font-size: 18px;
    }
  `,
  textarea: css`
    width: 100%;
    padding: 15px;
    border-radius: 0;
    border: 1px solid $black;
    font-size: 22px;
    line-height: 1.6;
    font-family: inherit;
    height: 300px;
  `,
};
