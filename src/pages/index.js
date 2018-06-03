import React from "react";
import meteoriteImpacts from "../components/MeteoriteImpacts.png";
import gameOfLife from "../components/GameOfLife.png";
import dungeonCrawler from "../components/DungeonCrawler.png";

const IndexPage = () => (
  <div className="l-main-wrapper">
    <section className="main-content">
      <div className="row clearfix">
        <div className="image right">
          <a
            href="https://willgriffiths.github.io/meteorite-impacts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={meteoriteImpacts} />
          </a>
        </div>
        <div className="text">
          <h3>Meteor Impacts</h3>
          <p>
            Here I used the D3 visualization library to show the 1000 largest meteorite impacts
            recorded. The earth is rendered using Canvas for performance reasons and the tooltips as
            SVG.
          </p>
        </div>
      </div>
      <div className="row clearfix">
        <div className="image">
          <a
            href="https://codepen.io/willgriffiths/full/kXVBXB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={dungeonCrawler} />
          </a>
        </div>
        <div className="text">
          <h3>A Dungeon RPG</h3>
          <p>
            This is a role playing game I created for the Freecodecamp curiculum. You can walk
            around the world, pick up items and slay enemies.
          </p>
        </div>
      </div>
      <div className="row clearfix">
        <div className="image right">
          <a
            href="https://codepen.io/willgriffiths/full/wWmwVy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={gameOfLife} />
          </a>
        </div>
        <div className="text">
          <h3>Conway&#39;s Game of Life</h3>
          <p>
            This is my implementation of the legendary cellular automation simulation. The game is
            built in React. I plan on implementing Canvas to increase the performance.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;
