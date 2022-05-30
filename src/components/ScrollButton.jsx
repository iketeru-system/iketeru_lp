import { smoothScrollTo } from "../utilities/scroll";
import Button from "./Button";

const ScrollButton = ({ children, target }) => {
  const handleClick = (e) => {
    smoothScrollTo(target);
    e.preventDefault();
  };

  return (
    <Button href={`#${target}`} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ScrollButton;
