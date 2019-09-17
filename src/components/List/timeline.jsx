import React, { useEffect } from "react";
import user from "../../static/me.png";
import { Searchbar, List, ListItem } from "framework7-react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        title: `Item ${i}`,
        subtitle: `Subtitle ${i}`
      });
    }
    this.state = {
      items,
      vlData: {
        items: []
      }
    };
  }
  searchAll(query, items) {
    const found = [];
    for (let i = 0; i < items.length; i += 1) {
      if (
        items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        query.trim() === ""
      )
        found.push(i);
    }
    return found;
  }
  renderExternal(vl, vlData) {
    this.setState({ vlData });
  }

  componentWillUpdate() {
    console.log(this);
  }
  render() {
    return (
      <div className="Timeline">
        <Searchbar
          searchContainer=".virtual-list"
          searchItem="li"
          searchIn=".item-title"
          disableButton={!this.$theme.aurora}
        ></Searchbar>

        <List className="searchbar-not-found">
          <ListItem title="Nothing found"></ListItem>
        </List>

        <List
          className="searchbar-found"
          medialList
          virtualList
          virtualListParams={{
            items: this.state.items,
            searchAll: this.searchAll,
            renderExternal: this.renderExternal.bind(this),
            height: this.$theme.ios ? 63 : this.$theme.md ? 73 : 46
          }}
        >
          <ul>
            {this.state.vlData.items.map((item, index) => (
              <ListItem
                key={index}
                mediaItem
                title={item.title}
                subtitle={item.subtitle}
                style={{ top: `${this.state.vlData.topPosition}px` }}
              ></ListItem>
            ))}
          </ul>
        </List>
      </div>
    );
  }
}
