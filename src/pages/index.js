import * as React from "react"
import styled, {keyframes} from 'styled-components'
// import "@fontsource/inter"
import "@fontsource/inter/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/200.css"
import "@fontsource/ibm-plex-mono"
import gradient1 from '../images/gradient1.webm'
import gradient2 from '../images/gradient2.webm'

const StyledDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding-left: 150px;
  width: 100vw;
  height: 100vh;
`
const StyledHeading1 = styled.h1`
  //position: relative;
  //margin-top: 0;
  //margin-bottom: 64px;
  //margin: auto;
  margin-top: 0;
  max-width: 320px;
  color: white;
  font-size: 45px;
  font-weight: 400;
  font-family: inter;
`

const StyledParagraph = styled.p`
  margin-top: 0;
  max-width: 450px;
  color: white;
  font-size: 25px;
  font-weight: 200;
  font-family: inter;

`

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  position: relative;

`

const StyledLink = styled.a`
  //padding: 10px;
  //padding-left: 30px;
  //padding-right: 30px;
  background-color: transparent;
  //border: 2px white solid;
  border-radius: 500px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: inter;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`
const horizontalAnimation = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`
const HorizontalScrollText = styled.h2`
  max-width: 450px;
  color: white;
  font-size: 25px;
  font-weight: 200;
  font-family: "IBM Plex Mono";
  animation-name: ${horizontalAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Footer = styled.h3`
  position: absolute;
  bottom: 5px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  font-family: inter;
  //font-family: "IBM Plex Mono";
`

// markup
const IndexPage = () => {
    return (<div>
            <style jsx global>{`
              body {
                margin: 0px;
                padding: 0px;
              }
            `}</style>

            <StyledDiv>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <StyledHeading1>
                        ADVOCATE
                        <br/>
                        EXPERIMENTAL
                        <br/>
                        LABS
                    </StyledHeading1>

                    <div style={{width: 100}}/>

                    <div>
                        <StyledParagraph>
                            We’re a new creative labs founded at The Harvard Advocate, and we’d love to work with you.
                        </StyledParagraph>

                        <StyledLink href="https://forms.gle/VC3EKCJmdcX5tofs5" target="_blank" rel="noreferrer noopener">
                            START A PROJECT WITH US
                        </StyledLink>

                        {/*<HorizontalScrollText>*/}
                        {/*    Augmented Reality | NFTs | Experimental Performance Spaces | Art Residency Program | Haunted Houses | Flea Markets | Third Wave Coffee | Botany  |*/}
                        {/*</HorizontalScrollText>*/}
                    </div>

                </div>

                <Footer>21 SOUTH ST CAMBRIDGE, MA 02138 | COPYRIGHT © THE HARVARD ADVOCATE 2022</Footer>
            </StyledDiv>

            <StyledVideo preload="auto" autoPlay muted loop>
                <source src={gradient1} type="video/webm"/>
            </StyledVideo>
        </div>

    )
}

export default IndexPage
