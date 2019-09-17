import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Link
} from "framework7-react";

import Timeline from "../components/List/timeline";

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link
          iconIos="f7:menu"
          iconAurora="f7:menu"
          iconMd="material:menu"
          panelOpen="left"
        />
      </NavLeft>
      <NavTitle sliding>TimeLine</NavTitle>
    </Navbar>

    <Timeline />
  </Page>
);
