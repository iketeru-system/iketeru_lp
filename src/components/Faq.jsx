import { css } from "@emotion/react";
import { colors } from "../utilities/styleUtilities";
import { mq } from "../utilities/styleUtilities";
import Container from "./Container";
import Heading2 from "./Heading2";
import Section from "./Section";
import { faqList } from "../utilities/faqList";
import IconQ from "../inline-svg/icon-q.svg";
import IconA from "../inline-svg/icon-a.svg";

const Faq = () => {
  return (
    <Section>
      <Container>
        <Heading2>よくあるご質問</Heading2>
        <div>
          {faqList.map((faqItem) => (
            <section key={faqItem.q} css={styles.item}>
              <h3 css={styles.title}>
                <span css={styles.textInner}>
                  <IconQ css={styles.iconQ} />
                  {faqItem.q}
                </span>
              </h3>
              <p css={styles.answer}>
                <span css={styles.textInner}>
                  <IconA css={styles.iconA} />
                  {faqItem.a}
                </span>
              </p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;

const styles = {
  item: css`
    padding: 40px 30px;
    background-color: ${colors.purple3};
    :nth-child(n + 2) {
      margin-top: 40px;
    }
    ${mq.sm} {
      padding: 20px 10px;
    }
  `,
  text: css`
    padding: 30px 20px;
    font-size: 22px;
    line-height: 1.6;
    ${mq.sm} {
      padding: 20px 10px;
      font-size: 18px;
    }
  `,
  title: css`
    padding: 30px 20px;
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: bold;
    ${mq.sm} {
      padding-top: 0;
      margin-bottom: 0;
    }
  `,
  answer: css`
    padding: 30px 20px;
    font-size: 22px;
    line-height: 1.6;
    background-color: ${colors.white};
    ${mq.sm} {
      font-size: 16px;
    }
  `,
  textInner: css`
    position: relative;
    display: block;
    padding-left: 55px;
    ${mq.sm} {
      font-size: 16px;
    }
  `,
  icon: css`
    position: absolute;
    top: -4px;
    left: 0;
    ${mq.sm} {
      top: 2px;
    }
  `,
  iconQ: css`
    position: absolute;
    top: -4px;
    left: 0;
    ${mq.sm} {
      width: 20.5px;
      height: 18.5px;
    }
  `,
  iconA: css`
    position: absolute;
    top: -4px;
    left: 0;
    ${mq.sm} {
      width: 21.5px;
      height: 17.5px;
    }
  `,
};
