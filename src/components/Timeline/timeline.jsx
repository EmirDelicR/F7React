import React, { useContext } from "react";
import badge from "../../static/badge.png";
import { Icon } from "framework7-react";
import Badge from "../Badge/badge";

import F7Context from "../../context/f7Context";

export default function TimelineComponent() {
  const f7 = useContext(F7Context);
  console.log("This is F7: ", f7);

  const elements = [
    {
      year: 2019,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    },
    {
      year: 2019,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    },
    {
      year: 2018,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    },
    {
      year: 2018,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    },
    {
      year: 2018,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    },
    {
      year: 2018,
      img: badge,
      name: "Name des Badges",
      info: "eventuelle Zusatzinformatonen zum batch"
    }
  ];

  return (
    <div className="Timeline">
      <div className="timeline">
        <div className="timeline-item start">
          <div className="timeline-item-divider">FFOÖ</div>
        </div>

        {elements.map((item, index) => {
          return (
            <div className="timeline-item" key={index}>
              <div className="timeline-item-date">
                <span>
                  {elements[index - 1] && elements[index - 1].year === item.year
                    ? ""
                    : item.year}
                </span>
              </div>
              <div className="timeline-item-divider">
                <Icon className="timeline-icon" f7="share" size="24px"></Icon>
              </div>
              <div className="timeline-item-content">
                <div className="timeline-item-wrapper">
                  {/*   <div className="timeline-item-spacer"></div> */}
                  <div className="timeline-item-badge">
                    <Badge src={item.img} />
                  </div>
                  <div className="timeline-item-name">
                    <b>{item.name}</b>
                    <br />
                    {item.info}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="timeline-item end">
          <div className="timeline-item-divider"></div>
        </div>
      </div>
    </div>
  );
}
