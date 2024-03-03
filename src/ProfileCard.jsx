import "./Profile.css";
import PropTypes from 'prop-types';


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <Avatar />
      <div className="info">
        <Info/>
        <List/>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="photo">
      <img src="/ProfileCard/Shrel.jpg" alt="" />
    </div>
  );
};


const Info = () =>(
    <div>
    <h1>Shrel Kumar</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam hic
          ad perferendis corporis quibusdam tenetur quia voluptatem, aperiam
          minus repellat. Cum eum cumque, odit pariatur officiis amet iste
          repellendus provident.
        </p>
    </div>
)

const List = () =>{
    return(
        <ul className="skills">
          {/* <Skill color="Blue" skill="HTML CSS" />
          <Skill color="Yellow" skill="JavaScript" />
          <Skill color="yellowgreen" skill="Web Design" />
          <Skill color="Red" skill="Git and Github" />
          <Skill color="skyblue" skill="React" />
          <Skill color="Orange" skill="Svetle" /> */}


          {skills.map((skill)=>{
              return (
                <Skill key={skill.skill} skill={skill.skill} color={skill.color} />
              )
          })}
        </ul>
    )
}

const Skill = (props) => {
  return (
    <li className="listElement" style={{ backgroundColor: props.color }}>
      {props.skill}
    </li>
  );
};

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };
export default ProfileCard;
