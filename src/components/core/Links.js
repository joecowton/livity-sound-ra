import React from "react";
import ImageLink from "./ImageLink";
import SoundCloud from "../../assets/soundcloud.png";
import Bandcamp from "../../assets/bandcamp.png";
import Discogs from "../../assets/discogs.svg";
import Twitter from "../../assets/twitter.jpg";

export default () => (
  <div style={{ textAlign: "center" }}>
    <ImageLink
      img={SoundCloud}
      link="https://www.soundcloud.com/livity-sound"
    />
    <ImageLink
      img={Discogs}
      link="https://www.discogs.com/label/251117-Livity-Sound"
    />
    <ImageLink img={Bandcamp} link="https://livitysound.bandcamp.com/" />
    <ImageLink img={Twitter} link="https://twitter.com/livity_sound?lang=en" />
  </div>
);
