import parse from "html-react-parser";

interface code {
  codeString: string;
}

const Button: React.FC<code> = ({ codeString }) => {
  return <div>{parse(codeString)}</div>;
};

export default Button;
