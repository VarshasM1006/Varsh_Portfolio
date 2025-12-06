import { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const F = {
  Container: styled.footer<{ $isMobile: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1rem; /* Increased font size */
    padding: ${({ $isMobile }) => ($isMobile ? '1rem 1.5rem' : '1rem 2rem')};
    z-index: 1;
  `,
  Text: styled.p<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.tertiaryTextColor};
    margin: 0;
  `,
  Link: styled.a<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export const Footer = () => {
  const { isMobile, theme } = useContext(AppContext);

  return (
    <F.Container $isMobile={isMobile}>
      <F.Text data-v2="footer" $theme={theme}>
        {'Designed by '}
        <F.Link
          data-v2="creator"
          aria-label="VARSHA S's personal website (opens in new window)"
          href="https://github.com/VarshasM1006"
          rel="noopener noreferrer"
          target="_blank"
          $theme={theme}
        >
          {'Varsh'}
        </F.Link>
        
      </F.Text>
    </F.Container>
  );
};
