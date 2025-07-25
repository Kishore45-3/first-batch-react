import "./styleButton.css";
function StyleButton(props) {
  const { text, onclick } = props;
  return (
    <div>
      <button className="styledButton" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}

export default StyleButton;
