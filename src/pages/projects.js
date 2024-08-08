import * as React from "react"
import styled, {keyframes} from 'styled-components'
// import "@fontsource/inter"
import "@fontsource/inter/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/200.css"
import "@fontsource/ibm-plex-mono"
import gradient1 from '../images/gradient.mp4'
import aidvocatar from '../images/aidvocatar.jpg'

import { Link } from 'gatsby'

const Center = styled.div`
  // align-items: center;
  // justify-content: center;

`
const StyledDiv = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  //padding-left: 150px;
  width: 100vw;
  height: 40vh;
`

const ResponsiveDiv = styled.div`
  margin-top:50vh; 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-right: 30px;
  padding-left: 30px;
  @media (max-width: 200px) {
    flex-direction: column;
  }
`

const StyledTitle = styled.h1`
  position: absolute;
  //margin-top: 0;
  //margin-bottom: 64px;
  //margin: auto;
  margin-top: 0px;
  // max-width: 320px;
  color: white;
  font-size: 90px;
  font-weight: 400;
  font-family: inter;

  @media (max-width: 200px) {
    font-size: 40px;
   }
   @media (max-width: 100px) {
    font-size: 37px;
   }
`

const StyledHeading1 = styled.h1`
  position: relative;
  //margin-top: 0;
  //margin-bottom: 64px;
  //margin: auto;
  margin-top: 0px;
  max-width: 320px;
  color: white;
  font-size: 45px;
  font-weight: 400;
  font-family: inter;

  @media (max-width: 200px) {
    font-size: 40px;
   }
   @media (max-width: 100px) {
    font-size: 37px;
   }
`

const StyledImage = styled.img`

  // max-width: 50px;
  width: 200px;


  @media (max-width: 50px) {
    font-size: 40px;
   }
   @media (max-width: 50px) {
    font-size: 37px;
   }
`

const StyledParagraph = styled.p`
  margin-top: 0;
  max-width: 450px;
  // max-width 80vw
  color: white;
  font-size: 25px;
  font-weight: 200;
  font-family: inter;

  @media (max-width: 700px) {
   font-size: 20px;
  }

  
`


const StyledParagraph2 = styled.p`
  margin-top: 0;
  max-width: 450px;
  // max-width 80vw
  color: white;
  font-size: 16px;
  font-weight: 200;
  font-family: inter;

  @media (max-width: 700px) {
   font-size: 12px;
  }

  `

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  padding: 0;
  margin: 0;

`


const StyledGatsbyLink = styled(props => <Link {...props} />)`
  //padding: 10px;
  //padding-left: 30px;
  //padding-right: 30px;
  background-color: transparent;
  //border: 2px white solid;
  border-radius: 500px;
  border: none;
  color: white;
  font-size: 25px;
  font-weight: 600;
  font-family: inter;
  text-decoration: none;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: #FFEA7C;
  }

  @media (max-width: 700px) {
    font-size: 18px;
   }
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
  // font-size: 20px;
  font-weight: 600;
  font-family: inter;
  // text-decoration: none;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: #FFEA7C;
  }

  @media (max-width: 700px) {
    font-size: 18px;
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
  // margin-top: 400px;
  align-items: center;

  bottom: -55vh;
  color: white;
  max-width: 100vw;
  font-size: 20px;
  font-weight: 400;
  font-family: inter;
  padding-left: 40px;
  padding-right: 40px;
  //font-family: "IBM Plex Mono";
  @media (max-width: 900px) {
    display: none;
  }
`

// markup
const Projects = () => {
    return (
    <div style={{height:'100%', width:'100%'}}>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>



        <Center>

        <StyledDiv>

        <StyledTitle>
              Projects
            </StyledTitle>
            
            <ResponsiveDiv>

  


                <StyledHeading1>

                  <StyledImage loading="lazy"  src={aidvocatar}></StyledImage>
                    {/* Projects
                    <br/>
                    EXPERIMENTAL
                    <br/>
                    LABS */}
                </StyledHeading1>

                <div style={{width: 100}}/>

                <div>
                    <StyledParagraph>
                        <b>AIdvocatAR</b>
                    </StyledParagraph>
                    <StyledParagraph>
                        Mira Yu
                    </StyledParagraph>
                    <br></br>

                    <StyledParagraph2>
                   Uses decentralized machine learning and augmented reality to transform published pieces from <i>The Harvard Advocate</i> into dynamic 3D models for an immersive reading experience.
                    &nbsp;<StyledLink href="https://apps.apple.com/us/app/aidvocatar/id6480157418">Download here.</StyledLink>
                    </StyledParagraph2>

                    {/* <StyledLink href="https://forms.gle/VC3EKCJmdcX5tofs5" target="_blank" rel="noreferrer noopener">
                        START A PROJECT
                    </StyledLink> */}
                    <div style={{display: 'flex', flexDirection: 'row'}}>

                      {/* <StyledLink href="https://forms.gle/eXRmpvHnFdWMnvtH6" target="_blank" rel="noreferrer noopener">
                          Apply Here.
                      </StyledLink>
                      <div style={{padding: "10px"}}/> */}


                      {/* <StyledLink href="mailto:labs@theharvardadvocate.com">
                        GitHub.
                    </StyledLink> */}
                    </div>


                    {/*<HorizontalScrollText>*/}
                    {/*    Augmented Reality | NFTs | Experimental Performance Spaces | Art Residency Program | Haunted Houses | Flea Markets | Third Wave Coffee | Botany  |*/}
                    {/*</HorizontalScrollText>*/}
                </div>

            </ResponsiveDiv>

            <Footer>Return <StyledGatsbyLink href="/">home</StyledGatsbyLink>.</Footer>


            
        </StyledDiv>



        </Center>

        <StyledVideo preload="auto" autoPlay autoplay muted loop>
            <source src={gradient1} type="video/mp4"/>
        </StyledVideo>
       </div>

    )
}

export default Projects
