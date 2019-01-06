import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createRelease } from "../graphql/mutations";

const extractSrc = embedCode =>
  embedCode.includes("src")
    ? embedCode.split("src=")[1].split(/[ >]/)[0]
    : null;

const extractHref = embedCode =>
  embedCode.includes("href")
    ? embedCode.split("href=")[1].split(/[ >]/)[0]
    : null;

export default class CreateRelease extends React.Component {
  state = { artist: "", title: "", embedCode: "", releases: [] };

  render() {
    return (
      <div style={styles.inputContainer}>
        <input
          name="artist"
          placeholder="artist name"
          onChange={this.onChange}
          value={this.state.artist}
          style={styles.input}
        />
        <input
          name="title"
          placeholder="release title"
          onChange={this.onChange}
          value={this.state.title}
          style={styles.input}
        />
        <input
          name="embedCode"
          placeholder="embed code"
          onChange={this.onChange}
          value={this.state.embedCode}
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
    const { artist, title, embedCode } = this.state;
    const src = extractSrc(embedCode);
    const href = extractHref(embedCode);

    if (artist === "" || title === "" || src === "" || href === "") return;
    try {
      const release = { artist, title, src, href };
      const releases = [...this.state.releases, release];
      this.setState({
        releases
      });
      await API.graphql(graphqlOperation(createRelease, { input: release }));
      this.setState({ artist: "", title: "", embedCode: "" });
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
