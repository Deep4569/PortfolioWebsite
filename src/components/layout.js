import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Loader, Nav, Social, Email, LightMode } from '@components';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import Helmet from 'react-helmet';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading || isHome) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
  }, [isLoading]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">

          <Helmet>
            <html lang="en"/>
            <title itemProp="name" lang="en">
              {site.siteMetadata.title}
            </title>
            <link rel="shortcut icon" href={favicon} />
            <link rel="canonical" href="https://dpatel.netlify.app" />

            <meta name="description" content={site.siteMetadata.description} />
            <meta name="keywords" content={config.siteKeywords} />
            <meta name="google-site-verification" content={config.googleVerification} />
          </Helmet>

          <GlobalStyle />
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Email isHome={isHome} />
              <Social isHome={isHome} />
              <div id="content">
                {children}
              </div>
            </StyledContent>
          )}
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
