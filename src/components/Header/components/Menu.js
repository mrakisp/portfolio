import React from "react";
// import mockData from './data';

const Menu = props => {
  // const { className, ...rest } = props;

  // const classes = useStyles();

  // const [products] = useState(mockData);

  return (
    <nav className="main-nav">
      <a href="#about">About Me</a> |
      <a href="#projects">Projects</a> |
      <a href="#contact">Contact</a> |
    </nav>
  );
};

export default Menu;
