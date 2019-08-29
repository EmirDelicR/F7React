import React from "react";
import { Page, Navbar, Block } from "framework7-react";
import SegmentTwo from "../components/Activities/State/segment-two";
import SegmentThree from "../components/Activities/State/segment-three";
import Info from "../components/Activities/Info/info";
import Progress from "../components/Activities/Progress/progress";

export default () => (
  <Page name="Tätigkeiten" className="Activities">
    <Navbar title="Tätigkeiten" />
    <Block>
      <Progress />
      <SegmentTwo />
      <SegmentThree />
      <Info />
    </Block>
  </Page>
);
