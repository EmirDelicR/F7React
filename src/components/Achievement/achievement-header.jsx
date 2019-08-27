import React from "react";
import { Block, Button, Row, Col, Icon } from "framework7-react";

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
            <Row className="top">
              <Col>
                <Avatar />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Button>
                      <Icon f7="home" size="14px" color="blue"></Icon>
                    </Button>
                  </Col>
                  <Col>
                    <Button>
                      <Icon f7="home" size="14px" color="blue"></Icon>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
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
