import React from "react";
import { Block, Row, Col, Icon } from "framework7-react";

import Avatar from "../Avatar/avatar";

export default function AchievementHeader() {
  return (
    <div className="achievement-header">
      <Block>
        <Row>
          <Col>
            <h1>DEINE ERFOLGE AUF EINEM BLICK!</h1>
          </Col>
          <Col className="left-segment">
            <div className="archivement-user-meta">
              <div className="archivement-user-meta-img">
                <Avatar />
              </div>

              <div className="archivement-user-meta-actions">
                <Icon f7="print" size="24px"></Icon>

                <Icon f7="share" size="24px"></Icon>
              </div>
            </div>

            <Row className="bottom">
              <Col>
                <h4>User name</h4>
                <p>Personalnr.:54994</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Block>
    </div>
  );
}
