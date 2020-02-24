import React from "react";
import { Head, Menu } from "./components";
// import mockData from './data';

const Header = props => {
  // const { className, ...rest } = props;

  // const classes = useStyles();

  // const [products] = useState(mockData);

  return (
    <header>
      <Head/>
      <Menu/>
    </header>
  );
};

export default Header;
