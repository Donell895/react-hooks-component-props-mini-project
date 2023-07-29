import React from "react";

function About(props) {
  const { image, aboutText } = props;
  const defaultImage =
    "https://via.placeholder.com/215Links to an external site.";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
 