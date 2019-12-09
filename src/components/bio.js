import React from "react"
import profilePic from "../assets/profile-pic.jpg"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={profilePic}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: "50%",
        }}
      />
      <p>
        Blog personnel de <strong>{author}</strong>, consultant React en mission
        chez Docavenue. J'adore parler d'autoentreprenariat, de React et de MVP.
      </p>
    </div>
  )
}

export default Bio
