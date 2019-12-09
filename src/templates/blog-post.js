import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import rehypeReact from "rehype-react"
import "../fonts/fonts-post.css"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Signup from "../components/Signup"
import Panel from "../components/Panel"
import { formatPostDate, formatReadingTime } from "../utils/helpers"
import { rhythm, scale } from "../utils/typography"
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from "../utils/i18n"

const GITHUB_USERNAME = "raphaelbadia"
const GITHUB_REPO_NAME = "badia.cc"
const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`

class Translations extends React.Component {
  render() {
    let { translations, lang, languageLink, editUrl } = this.props

    let readerTranslations = translations.filter(lang => lang !== "fr")

    return (
      <div className="translations">
        <Panel style={{ fontFamily: systemFont }}>
          {translations.length > 0 && (
            <span>
              <span>Available translations: </span>
              {readerTranslations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang ? (
                    <b>{codeToLanguage(l)}</b>
                  ) : (
                    <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                  )}
                  {i === readerTranslations.length - 1 ? "" : " • "}
                </React.Fragment>
              ))}
            </span>
          )}
          {lang !== "fr" && (
            <>
              <br />
              <br />
              <Link to={languageLink("fr")}>Read the original</Link>
              {" • "}
              <Link to={`/${lang}`}>View all translated posts</Link>
            </>
          )}
        </Panel>
      </div>
    )
  }
}

const Greeting = props => <div>Hello! {props.children}</div>

// the rehype react compiler
const renderAst = new rehypeReact({
  createElement: React.createElement,
  // define custom tags with components here
  // you can even override the standard HTML tags like 'a'
  components: { greeting: Greeting },
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    let {
      previous,
      next,
      slug,
      translations,
      translatedLinks,
    } = this.props.pageContext
    const lang = post.fields.langKey

    // Replace original links with translated when available.
    let html = post.html
    console.log("html", html)
    console.warn("ast", post.htmlAst)
    console.log("translated", translatedLinks)
    translatedLinks.forEach(link => {
      // jeez
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      }
      let translatedLink = "/" + lang + link
      html = html.replace(
        new RegExp('"' + escapeRegExp(link) + '"', "g"),
        '"' + translatedLink + '"'
      )
    })

    translations = translations.slice()
    translations.sort((a, b) => {
      return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1
    })

    loadFontsForCode(lang)
    // TODO: this curried function is annoying
    const languageLink = createLanguageLink(slug, lang)
    const enSlug = languageLink("fr")
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(
      1,
      enSlug.length - 1
    )}/index${lang === "fr" ? "" : "." + lang}.md`
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://badia.cc${enSlug}`
    )}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <h1 style={{ color: "var(--textTitle)" }}>
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: "block",
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
              {translations.length > 0 && (
                <Translations
                  translations={translations}
                  editUrl={editUrl}
                  languageLink={languageLink}
                  lang={lang}
                />
              )}
            </header>
            {renderAst(post.htmlAst)}
            {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
            <footer>
              <p>
                <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                  En parler sur twitter
                </a>
                {/* {` • `}
                <a href={editUrl} target="_blank" rel="noopener noreferrer">
                  Edit on GitHub
                </a> */}
              </p>
            </footer>
          </article>
        </main>
        <aside>
          <hr />
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: "none",
                textDecoration: "none",
                color: "var(--pink)",
              }}
              to={"/"}
            >
              Badia.cc
            </Link>
          </h3>
          <Bio />
          <nav>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    style={{ marginRight: 20 }}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`
