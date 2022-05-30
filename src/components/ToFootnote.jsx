import { smoothScrollTo } from "../utilities/scroll";

const target = "footer";

const ToFootnote = () => {
  const handleClick = (e) => {
    smoothScrollTo(target);
    e.preventDefault();
  };

  return (
    <a href={`#${target}`} onClick={handleClick}>
      *
    </a>
  );
};

export default ToFootnote;
