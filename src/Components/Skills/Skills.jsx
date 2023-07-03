import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaReact, FaPython, FaJava, FaJs } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Skill component
const Skill = ({ Icon, name }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={props} className="flex items-center my-2 space-x-3">
      <div className="border-2 border-[#53ab98] rounded-lg p-2 flex items-center">
        <Icon size={24} className="text-[#53ab98] mr-2" />
        <div>{name}</div>
      </div>
    </animated.div>
  );
};

// Skills component
const Skills = () => {
  const skills = {
    Expertise: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap5", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: FaCss3Alt },
      { name: "Daisy UI", icon: FaBootstrap },
      { name: "Javascript", icon: FaJs },
      { name: "React", icon: FaReact },
    ],
    Comfortable: [
      { name: "MongoDB", icon: FaNodeJs },
      { name: "Express", icon: FaNodeJs },
      { name: "Node", icon: FaNodeJs },
      { name: "Framer-motion", icon: FaReact },
      { name: "Lazy Loading", icon: FaReact },
    ],
    Familiar: [
      { name: "Tanstack query", icon: FaReact },
      { name: "Axios", icon: FaReact },
      { name: "JWT", icon: FaReact },
      { name: "Recharts", icon: FaReact },
      { name: "React hook form", icon: FaReact },
      { name: "Strip", icon: FaReact },
    ],
  };

  const skillsProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(100px)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="p-10">
      <animated.div style={skillsProps}>
        <h1 className="text-5xl font-bold mb-6 text-center">My Skills</h1>
        <Tabs>
          <TabList className="flex justify-center mb-6">
            {Object.keys(skills).map((category) => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>
          {Object.keys(skills).map((category) => (
            <TabPanel key={category}>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills[category].map((skill, index) => (
                  <Skill key={index} name={skill.name} Icon={skill.icon} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </animated.div>
    </div>
  );
};

export default Skills;
