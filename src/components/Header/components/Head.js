import React from "react";
// import mockData from './data';

const Head = props => {
  // const { className, ...rest } = props;

  // const classes = useStyles();

  // const [products] = useState(mockData);

  return (
    <div className="head-container">

      <div className="container">
        <div className="sun"><div className="orbit-title">FrontEnd <br/> Developer</div></div>

        <div className="mercurys-orbit">
          <div className="mercury"></div>
        </div>

        <div className="venus-orbit">
          <div className="venus"></div>
        </div>

        <div className="earths-orbit">
          <div className="earth"></div>
        </div>

        <div className="mars-orbit">
          <div className="mars"><div className="orbit-text">Javascript</div></div>
        </div>

        <div className="jupiters-orbit">
          <div className="jupiter"></div>
        </div>

        <div className="saturns-orbit">
          <div className="saturn"><div className="orbit-text">Html/Html5</div></div>
        </div>

        <div className="uranus-orbit">
          <div className="uranus"><div className="orbit-text">React</div></div>
        </div>

        <div className="neptunes-orbit">
          <div className="neptune"><div className="orbit-text">CSS/CSS3</div></div>
        </div>

        <div className="plutos-orbit">
          <div className="pluto"><div className="orbit-text">Wordpress</div></div>
        </div>
      </div>
    </div>
  );
};

export default Head;
