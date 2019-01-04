import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createRelease } from "../graphql/mutations";

export default class CreateRelease extends React.Component {
  state = { artist: "", description: "", releases: [] };

  render() {
    return (
      <div style={styles.inputContainer}>
        <input
          name="artist"
          placeholder="release name"
          onChange={this.onChange}
          value={this.state.artist}
          style={styles.input}
        />
        <input
          name="description"
          placeholder="release description"
          onChange={this.onChange}
          value={this.state.description}
          style={styles.input}
        />
        <button style={styles.button} onClick={this.createRelease}>
          Create Release
        </button>
      </div>
    );
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createRelease = async () => {
    const { artist, description } = this.state;
    if (artist === "" || description === "") return;
    try {
      const release = { artist, description };
      const releases = [...this.state.releases, release];
      this.setState({ releases, artist: "", description: "" });
      await API.graphql(graphqlOperation(createRelease, { input: release }));
      console.log("release successfully created!");
    } catch (err) {
      console.log("error: ", err);
    }
  };
}

const styles = {
  inputContainer: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    width: 300
  },
  button: {
    border: "none",
    backgroundColor: "#ddd",
    padding: "10px 30px"
  },
  input: {
    fontSize: 18,
    border: "none",
    margin: 10,
    height: 35,
    backgroundColor: "#ddd",
    padding: 8
  }
};
