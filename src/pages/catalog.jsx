import React, { useState, useEffect } from "react";
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Panel,
  View,
  Block
} from "framework7-react";

import AchievementHeader from "../components/Achievement/achievement-header";
import BadgeCount from "../components/Achievement/Badges/badges-count";
import BadgeEmblem from "../components/Achievement/Badges/badges-emblem";
import AchievementStatistic from "../components/Achievement/achievement-statistic";

export default function Example() {
  return (
    <Page name="achievements" className="Achievements">
      <Navbar title="Achievements">
        {/* <NavRight>
          <Link
            iconIos="f7:menu"
            iconAurora="f7:menu"
            iconMd="material:menu"
            panelOpen="right"
          />
        </NavRight> */}
      </Navbar>
      {/* Right panel with reveal effect*/}
      {/* <Panel right reveal themeDark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Make a list of element</Block>
          </Page>
        </View>
      </Panel>
      */}
      {/* Content */}
      <AchievementHeader />
      <BadgeCount />
      <BadgeEmblem />
      <AchievementStatistic />
    </Page>
  );
}
/*
export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products
    };
  }
  render() {
    return (

    );
  }
}
*/
