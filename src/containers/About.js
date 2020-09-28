import React, { useEffect } from 'react';
import { styled } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TEXT_PRIMARY } from '../constants/colors';
import setRandomBg from '../helpers/layout/bg';
import { trackPageView } from '../helpers/analytics';

const About = () => {
  useEffect(() => {
    setRandomBg();
    trackPageView();
  });
  return (
  <AboutContainer
    item xs={12}
  >
    <Grid container>
      <Grid item xs={12}>
        <PageTitle>About</PageTitle>
      </Grid>
      <Grid item xs={12}>
        <AboutParagraph>I've created this tool to help out the people that wanted more out of Youtube playlists.</AboutParagraph>
        <PageSubTitle>It's an opensource project so any contributions are appreciated.</PageSubTitle>
        <AboutParagraph>
          Stefan Paduraru&nbsp;-&nbsp;
          <a
            style={{color: TEXT_PRIMARY}}
            href="https://paduraru.com/"
            target="_blank"
            rel="noopener noreferrer"
          >paduraru.com</a>
        </AboutParagraph>
        <AboutParagraph>
          Latest Improvements
        </AboutParagraph>
        <AboutParagraph>(28 Sept 2020)</AboutParagraph>
        <ul>
            <li><AboutParagraph>added dynamic background toggle to mitigate performance issues on slower machines </AboutParagraph></li>
        </ul>
        <AboutParagraph>(19 Aug 2020)</AboutParagraph>
          <ul>
            <li><AboutParagraph>using React.Memo on playlist items to improve performance</AboutParagraph></li>
            <li><AboutParagraph>added about section</AboutParagraph></li>
          </ul>
        <AboutParagraph align="center">
          <a
            rel="noopener noreferrer"
            href="https://github.com/stefanpaduraru/playlist-randomizer"
            target="_blank">
            <img src="./images/icons/github.png" alt="Playlist-randomizer Github Repository"/>
          </a>
        </AboutParagraph>
      </Grid>
    </Grid>
  </AboutContainer>
)}

export default About;

const AboutContainer = styled(({ ...other }) => <Grid {...other} />)({
  marginBottom: 0,
  overflow: 'hidden',
});

const PageTitle = styled(Typography)({
  '&': {
    color: TEXT_PRIMARY,
    fontSize: '1.75em'
  }
});

const PageSubTitle = styled(Typography)({
  '&': {
    color: TEXT_PRIMARY,
    fontSize: '1.15em'
  }
});

const AboutParagraph = styled(Typography)({
  '&': {
    color: TEXT_PRIMARY,
    fontSize: '1.15em',
    marginTop: '1.3em',
  }
});