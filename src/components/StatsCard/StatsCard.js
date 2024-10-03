import React from "react";
import Format from "format-number";
import { capitalizeWord, parseDate } from "../../utils/utils";
import { useSelector } from "react-redux";

function StatsCard({ data }) {
  const { title, count } = data;
  const { lastUpdate } = useSelector((state) => state.stats.informations);

  const { date, time } = parseDate(lastUpdate);

  const style_colors = {
    infected: { bgColor: "#afd6fc", bottomColor: "#576afd" },
    recovered: { bgColor: "#dcf5e1", bottomColor: "#6dfa70" },
    death: { bgColor: "#f3d5d5", bottomColor: "#f96a6a" },
    active: { bgColor: "#f3e0c8", bottomColor: "#f2e463" },
  };

  return (
    <div  className="cards" style={{ backgroundColor: style_colors[title].bgColor }} >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold" , fontSize:"18px" , margin:"10px 0"}}>{capitalizeWord(title)}</div>
        <div style={{ fontSize: "20px" , margin:"10px 0"}}>{Format()(count)}</div>
        <div style={{fontSize: "18px" , margin:"10px 0"}}>Last updated at:</div>
        <div style={{ color: "#5ca17d", fontSize: "15px" }}>
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <div style={{fontSize: "18px"}}>Number of {title} cases of COVID-19</div>
      </div>
      <div 
        style={{
          backgroundColor: style_colors[title].bottomColor,
          height: "0.5em",
          borderRadius:"20px",
        }}
      />
    </div>
  );
}

export default StatsCard;
