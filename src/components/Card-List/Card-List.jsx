import React from "react";
import "./Card-List.css";
import { Card } from "../Card/Card";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};
