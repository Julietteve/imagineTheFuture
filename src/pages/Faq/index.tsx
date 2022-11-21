import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import { AboutMe, ColDiv } from '../About/styles';
import { Box } from '../Main/styles';

const Faq = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children = {
                <Box>
                <AboutMe> FAQs. </AboutMe>
                <ColDiv>
                </ColDiv>
            </Box>
            }/>
        </>
    );
};

export default Faq;