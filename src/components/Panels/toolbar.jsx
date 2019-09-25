import React from "react";
import { Link } from "framework7-react";

export default function ToolbarComponent() {
  return (
    <>
      <Link
        tabLink="#view-home"
        iconIos="f7:home_fil"
        iconAurora="f7:home_fil"
        iconMd="material:home"
        text="Home"
        href="/"
        className="link-active"
        onClick={addActiveState}
      />
      <Link
        tabLink="#view-timeline"
        iconIos="f7:home_fil"
        iconAurora="f7:home_fil"
        iconMd="material:home"
        text="Time"
        href="/timeline/"
        onClick={addActiveState}
      />
      <Link
        id="catalog"
        tabLink="#view-catalog"
        iconIos="f7:list_fill"
        iconAurora="f7:list_fill"
        iconMd="material:view_list"
        text="Catalog"
        href="/catalog/"
        onClick={addActiveState}
      />
      <Link
        tabLink="#view-settings"
        iconIos="f7:settings_fill"
        iconAurora="f7:settings_fill"
        iconMd="material:settings"
        text="Settings"
        href="/settings/"
        onClick={addActiveState}
      />
    </>
  );
}

const addActiveState = event => {
  const previousActive = document.querySelector(".link-active");
  previousActive.classList.remove("link-active");
  const currentActive = event.currentTarget;
  currentActive.classList.add("link-active");
};
