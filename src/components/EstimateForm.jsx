import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useEstimateForm } from "../utilities/hooks";
import Button from "./Button";
import InputField from "./InputField";
import Alert from "./Alert";

const EstimateForm = () => {
  const { status, message, disabled, onSubmit } = useEstimateForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div css={styles.inputBox}>
        <InputField
          labelText="氏名"
          required
          id="estimate_name"
          placeholder="山田 太郎"
          registerReturn={register("name", {
            required: "氏名を入力してください。",
          })}
          error={errors.name}
        />
      </div>
      <div css={styles.inputBox}>
        <InputField
          labelText="会社名・屋号"
          id="estimate_company"
          placeholder="サンプル株式会社"
          registerReturn={register("company")}
        />
      </div>
      <div css={styles.inputBox}>
        <InputField
          labelText="メールアドレス"
          required
          id="estimate_email"
          placeholder="example@example.com"
          registerReturn={register("email", {
            required: "メールアドレスを入力してください。",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "メールアドレスを正しく入力してください。",
            },
          })}
          error={errors.email}
        />
      </div>
      <div css={styles.inputBox}>
        <InputField
          labelText="サイトURL"
          comment="（移行前のウェブサイトのURL）"
          id="estimate_website"
          placeholder="https://example.com"
          registerReturn={register("website")}
        />
      </div>
      <div css={styles.inputBox}>
        <InputField
          labelText="備考・ご要望等"
          id="estimate_comment"
          placeholder="備考・ご要望等をご記入ください。"
          multiLine
          registerReturn={register("comment")}
        />
      </div>
      <div css={styles.btnBox}>
        <Button type="submit" disabled={disabled}>
          送信する
        </Button>
      </div>
      {status && <Alert status={status}>{message}</Alert>}
    </form>
  );
};

export default EstimateForm;

const styles = {
  form: css`
    max-width: 800px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
  `,
  inputBox: css`
    :nth-child(n + 2) {
      margin-top: 40px;
    }
  `,
  btnBox: css`
    margin-top: 30px;
    text-align: center;
  `,
};
