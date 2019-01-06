import React from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listReleases } from "../graphql/queries";
import { deleteRelease } from "../graphql/mutations";

export default class Releases extends React.Component {
  state = { releases: [], user: undefined };

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listReleases));
      const releases = apiData.data.listReleases.items;
      this.setState({ releases, user: Auth.username });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.releases.map((release, i) => (
          <div style={styles.item} key={release.id}>
            <iframe
              className="image"
              style={{
                border: "0",
                width: "350px",
                height: "350px",
                boxShadow: "0 19px 38px rgba(0,0,0,0.30)"
              }}
              src={release.src}
              title={release.title}
              seamless
            >
              <a href={release.href}>{release.title}</a>
            </iframe>
            <p style={styles.artist}>{release.artist}</p>
            <p style={styles.title}>{release.title}</p>
            <button onClick={e => this.deleteRelease(e, release.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }

  deleteRelease = async (e, id: string) => {
    e.preventDefault();
    try {
      const release = { id };
      await API.graphql(graphqlOperation(deleteRelease, { input: release }));
      console.log("release successfully deleted!");

      const apiData = await API.graphql(graphqlOperation(listReleases));
      const releases = apiData.data.listReleases.items;
      this.setState({ releases });
    } catch (err) {
      console.log("error: ", err);
    }
  };
}

const styles = {
  item: {
    padding: 20,
    display: "inline-block"
  },
  artist: { fontSize: 22 },
  title: { color: "rgba(0, 0, 0, .45)" }
};
