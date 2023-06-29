import "./About.css";
import img from "../../assets/About/IMG_20230104_112848 copy.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={img}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hello! I'm Afra Zaman, a MERN Stack developer hailing from Dhaka, Bangladesh. 
        </p>
        <p className="a-desc">
        Currently pursuing my BSc in Information and Communication Engineering at Bangladesh University of Professionals, I'm honing my skills in creating user-friendly web applications. Beyond academia, I hold leadership roles in several tech clubs, underlining my strong teamwork and leadership abilities. Continuously striving to learn and grow in this dynamic field, my mission is to leverage my broad understanding of web development to create innovative solutions. Eager to discuss how my expertise can assist your next project, so feel free to connect!
        </p>
       
      </div>
    </div>
  );
};

export default About;