import * as styles from './styles.module.scss'

const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false,
  onChange,
  value,
  ...props
}) => {
  if (!multiLine) {
    return (
      <input
        type='text'
        id={id}
        name={name}
        className={styles.input}
        placeholder={placeholder}
      />
    )
  } else {
    return (
      <textarea
        id={id}
        name={name}
        className={styles.textarea}
        placeholder={placeholder}
      />
    )
  }
}

export default Textbox
