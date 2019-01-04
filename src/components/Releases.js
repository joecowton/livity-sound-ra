import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listReleases } from "../graphql/queries";

export default class Releases extends React.Component {
  state = { releases: [] };

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listReleases));
      const releases = apiData.data.listReleases.items;
      this.setState({ releases });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.releases.map((release, i) => (
          <div style={styles.item}>
            <p style={styles.artist}>{release.artist}</p>
            <p style={styles.title}>{release.title}</p>
            <iframe
              style={{ border: "0", width: "300px", height: "300px" }}
              src={release.src}
              title={release.title}
              seamless
            >
              <a href={release.link}>{release.title}</a>
            </iframe>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  item: {
    padding: 20,
    display: "inline-block"
  },
  artist: { fontSize: 22 },
  title: { color: "rgba(0, 0, 0, .45)" }
};
