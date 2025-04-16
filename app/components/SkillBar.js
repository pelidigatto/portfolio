const SkillBar = (props) => {
  var skillName = props.name;

  var percent = props.percent;
  var percentString = percent + "%";
  return (
    <div className="skillbarContent my-3">
      <div className="skillbarLabel">{skillName}</div>
      <div className="skillbar">
        <div className="SkillBarinner" style={{ width: percentString }}>
          <span className="SkillInidikator">{percentString}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
