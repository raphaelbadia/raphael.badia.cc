import React from "react"

import { rhythm } from "../utils/typography"

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://mobile.twitter.com/raphaelbadia"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
        &bull;{" "}
        <a
          href="https://github.com/raphaelbadia"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://www.linkedin.com/in/raphael-badia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    )
  }
}

export default Footer
