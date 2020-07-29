// @ts-ignore
import React from "react";

import Layout from "../components/layout";
import MyImage from "../components/myImage";
import SEO from "../components/seo";
//@ts-ignore
import style from '../css/index.module.css';
import SocialMediaButton from '../components/socialMediaButton';
// @ts-ignore
import TwitterIcon from '../images/Twitter.svg';
// @ts-ignore
import LinkedInIcon from '../images/LinkedIn.svg';
// @ts-ignore
import MediumIcon from '../images/Medium.svg';
// @ts-ignore
import GitHubIcon from '../images/GitHub.svg';
import Carousel from '../components/carousel';


// @ts-ignore
import AngualarImage from '../../Technologies/Angular.png';
// @ts-ignore
import CSS3Image from '../../Technologies/CSS3.png';
// @ts-ignore
import DockerImage from '../../Technologies/Docker.png';
// @ts-ignore
import FigmaImage from '../../Technologies/Figma.png';
// @ts-ignore
import GatsbyJSImage from '../../Technologies/GatsbyJS.png';
// @ts-ignore
import GitImage from '../../Technologies/Git.png';
// @ts-ignore
import HTML5Image from '../../Technologies/HTML5.png';
// @ts-ignore
import JavaScriptImage from '../../Technologies/JavaScript.png';
// @ts-ignore
import MangoDBImage from '../../Technologies/MongoDB.png';
// @ts-ignore
import NextJSImage from '../../Technologies/NextJS.png';
// @ts-ignore
import NodeJSImage from '../../Technologies/NodeJS.png';
// @ts-ignore
import ReactJSImage from '../../Technologies/React.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Mohammed E. Baci" />
    <div id={style.homeContainer}>
      <div id={style.topHorizontalContainer}>
        <div className={style.column}>
          <div style={{ textAlign: 'center' }}>Hello World!</div>
          <div id={style.name}>
            <span>It's me </span>
            <h1 style={{ display: 'inline', fontSize: '1.5em' }}>
              Mohammed E. Baci
          </h1>
            <h2 style={{ margin: 0, fontSize: '1.2em', color: '#ffffffcc' }}>
              Front-End & Mobile developer.
          </h2>
            <small>Future Engineer.</small>
          </div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec maximus turpis. Suspendisse consectetur elit maximus suscipit volutpat.
          </p>
        </div>
        <div id={style.pointer}></div>
        <div className={style.column}>
          <MyImage />
        </div>
      </div>
      <div id={style.socialmediaContainer}>
        <SocialMediaButton url='https://twitter.com/LHD_BC' icon={TwitterIcon} at='LHD_BC' />
        <SocialMediaButton url='https://github.com/LHDi' icon={GitHubIcon} at='LHDi' />
        <SocialMediaButton url='https://linkedin.com/in/lhdi' icon={LinkedInIcon} at='LHDi' />
        <SocialMediaButton url='https://medium.com/@lhdi' icon={MediumIcon} at='LHDi' />
      </div>
      <div style={{ height: '5px', width: '80px', background: 'white', borderRadius: '5px', margin: '1em auto' }} />
      <h2>Some of the Techs that I've worked with <span role='img' aria-label='down-arrow' >⬇️</span></h2>

      <Carousel images={[
        AngualarImage,
        CSS3Image,
        DockerImage,
        FigmaImage,
        GatsbyJSImage,
        GitImage,
        HTML5Image,
        JavaScriptImage,
        MangoDBImage,
        NextJSImage,
        NodeJSImage,
        ReactJSImage,
      ]} />
    </div>
  </Layout>
);

export default IndexPage;
