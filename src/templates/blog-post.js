import React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/core'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Heading, Text, Box, Divider } from '@chakra-ui/core'

const BoxCSS = css`
    > * {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <Heading as="h1" size="xl" mt={4}
          >
            {post.frontmatter.title}
          </Heading>
          <Text fontSize="md"
          >
            {post.frontmatter.date}
          </Text>
        </header>
        <Box css={BoxCSS} mt={4} as="section" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider
          mt={4}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
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
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1280) {
              src
            }
          }
        }
      }
    }
  }
`
