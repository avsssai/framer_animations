import React from "react";
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Wrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    background: skyblue;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const ImageWrapper = styled(motion.div)`
    height: 350px;
    width: 350px;
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
`
const ShadowWrapper = styled(motion.div)`
`
export default function Meditating ():JSX.Element{
    const ImageVariants = {
        start:{
            y:24,
            transition: {
                type:"spring",
                stiffness: 60,
            }
        }, 
        end: {
            y:12,
            stiffness:60,
            repeat:Infinity,
            delay:2

        }
    }
    return(
        <Wrapper>
        <ImageWrapper variants={ImageVariants} initial={{y:2}} animate={{y:[-30,2,-30], transition:{
            type:"tween",
            // stiffness:50,
            duration:3,
            repeat: Infinity
        }}}>
            <Image src={`${process.env.PUBLIC_URL}/meditating.svg`} 

            />    
        </ImageWrapper>        
        <ShadowWrapper initial={{
            width: "100px",
            height:"20px",
            background:"gray",
            opacity:0.7,
            borderRadius:"30%",
            marginTop:"-60px"
        }} animate={{
            width: ["50px","100px","50px"],
            height:"20px",
            background:"gray",
            opacity:[0.7,0.2,0.7],
            transition:{
                repeat:Infinity,
                duration:3
            }
      }} ></ShadowWrapper>    
        </Wrapper>
    )
}
