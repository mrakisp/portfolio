import React from "react";
// import { Head, Menu } from "./components";
// import mockData from './data';

const About = props => {
  // const { className, ...rest } = props;

  // const classes = useStyles();

  // const [products] = useState(mockData);

  return (
    <section className="about">
      <div className="about__left">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p className="line1">
            &#91;&nbsp;&ldquo;I'm a Frontend Developer.&rdquo;,
            <span class="cursor1">_</span>
          </p>
          <p className="line2">
            &nbsp;&nbsp;&ldquo;I'm a Wordpress Developer.&rdquo;,
            <span class="cursor2">_</span>
          </p>
          <p className="line3">
            &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;
            <span class="cursor3">_</span>
          </p>
          <p className="line4">
            ><span class="cursor4">_</span>
          </p>
        </div>
      </div>
      <div className="about__right">
        <div className="about__text">
          <span className="about__text__title">Akis Paneras</span>
          <span className="about__text__sum">
            gadsgasdgasgasdg has a sgd hahg a dghadhgagasgsadgasg asdgasgasgaga
            as gaasgasg a gadga
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
