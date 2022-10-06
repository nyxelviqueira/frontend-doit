import devs from "./assets/Programming-and-Development.jpg";
import business from "./assets/Business.jpg";
import admin from "./assets/Administrative-and-Secretary.jpg";
import design from "./assets/design-and-art.jpg";
import digital from "./assets/Digital-Marketing.jpg";
import music from "./assets/Music-and-Audio.jpg";
import various from "./assets/various.jpg";
import video from "./assets/Video-and-Animation.jpg";
import writing from "./assets/Writing-and-Translation.jpg";

import "./homePageCard.css";
import { Link } from "react-router-dom";

export const HomePageCards = ({ service }) => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">CATEGORIES</h1>

      <div className="home-page-wrapper">
        <Link
          to={`/services/category/programming-and-development`}
          className="home-card-link"
        >
          <div className="home-page-card">
            <img src={devs} alt="devs" />
            <h2 className="home-page-card-title">
              Programming and Development
            </h2>
            <p className="home-page-card-content">
              You can find different developers specialised in different
              programming languages that can help you to develop big projects.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/business`}>
          <div className="home-page-card">
            <img src={business} alt="business" />
            <h2 className="home-page-card-title">Business</h2>
            <p className="home-page-card-content">
              Our freelancers will help you in the fields of finance, human
              resources, management, blockchain, NFT, etc.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/administrative-and-secretary`}>
          <div className="home-page-card">
            <img src={admin} alt="admin" />
            <h2 className="home-page-card-title">
              Administrative and Secretary
            </h2>
            <p className="home-page-card-content">
              Find help in all these topics: Data entry, Microsoft Office,
              insurance, legal assistance or customer service.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/design-and-art`}>
          <div className="home-page-card">
            <img src={design} alt="design" />
            <h2 className="home-page-card-title">Design and art</h2>
            <p className="home-page-card-content">
              The most creative freelancers will create your own logo, make
              animations or crafting, and sculpting.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/digital-marketing`}>
          <div className="home-page-card">
            <img src={digital} alt="digital" />
            <h2 className="home-page-card-title">Digital Marketing</h2>
            <p className="home-page-card-content">
              Increase your online sales opportunities thanks to advertising
              campaigns, customer relationships, communications, telemarketing
              and Public Relations.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/music-and-audio`}>
          <div className="home-page-card">
            <img src={music} alt="music" />
            <h2 className="home-page-card-title">Music and Audio</h2>
            <p className="home-page-card-content">
              You will find all services related to music production, post
              production, streaming, sound design and audio engineering.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/Various`}>
          <div className="home-page-card">
            <img src={various} alt="various" />
            <h2 className="home-page-card-title">Various</h2>
            <p className="home-page-card-content">
              If you still haven't found what you are looking for, we can also
              offer you other categories such as self improvement, gaming,
              wellness...
            </p>
          </div>
        </Link>

        <Link to={`/services/category/video-and-animation`}>
          <div className="home-page-card">
            <img src={video} alt="video" />
            <h2 className="home-page-card-title">Video and Animation</h2>
            <p className="home-page-card-content">
              If your question is about animation, video editing, explainer
              videos or marketing videos this is your category.
            </p>
          </div>
        </Link>

        <Link to={`/services/category/writing-and-translation`}>
          <div className="home-page-card">
            <img src={writing} alt="writing" />
            <h2 className="home-page-card-title">Writing and Translation</h2>
            <p className="home-page-card-content">
              Content wiritng, editing, business copy, storytelling, career
              writing... are some of the topics.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
