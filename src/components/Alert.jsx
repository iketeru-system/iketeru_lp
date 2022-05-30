import { css } from "@emotion/react";
import { colors } from "../utilities/styleUtilities";

const Alert = ({ children, status }) => {
  console.log(status);
  return <p css={styles[status]}>{children}</p>;
};

export default Alert;

const generateStyle = (color) => css`
  margin-top: 30px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${colors.white};
  border: 2px solid;
  text-align: center;
  font-size: 18px;
  border-color: ${color};
  color: ${color};
`;

const styles = {
  success: generateStyle(colors.purple),
  error: generateStyle(colors.red),
};
