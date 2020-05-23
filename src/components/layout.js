import React from "react"
import { Link } from "gatsby"
import { ThemeProvider, Text, Heading, CSSReset } from "@chakra-ui/core"
import theme from "../theme"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Heading as="h1" size="2xl" mt={0}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </Heading>
    )
  } else {
    header = (
      <Heading as="h3" size="xl" mt={0}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </Heading>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div
        css={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <Text>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Text>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
