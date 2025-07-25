import "./Member.css";
function Member(props) {
  const memberName = props.name;
  const memberCity = props.city;
  return (
    <div className="memberCard">
      <h2>{memberName}</h2>
      <p className="member-sub-heading">{memberCity}</p>
    </div>
  );
}
export default Member;
