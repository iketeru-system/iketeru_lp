import { css } from "@emotion/react"
import Container from "../../common/Container"
import Footnote from "./Footnote"
import logo from "../../../images/logo.svg"
import { colors, mq } from "../../../styles/utils"

const Footer = () => {
  return (
    <footer id="footer">
      <div css={styles.upper}>
        <Container>
          <div css={styles.upperInner}>
            <Footnote />
            <p css={styles.copyright}>© 2022 イケテルシステム</p>
          </div>
        </Container>
      </div>
      <div css={styles.lower}>
        <img src={logo} alt="イケテルシステム" />
      </div>
    </footer>
  )
}

export default Footer

const styles = {
  upper: css`
    padding: 40px 0;
    background-color: ${colors.black};
    color: ${colors.white};
  `,

  upperInner: css`
    ${mq.smUp} {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  `,

  copyright: css`
    font-size: 14px;
    ${mq.sm} {
      margin-top: 20px;
      text-align: center;
    }
  `,

  lower: css`
    padding: 30px 20px;
    text-align: center;
  `,
}
