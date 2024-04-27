import { Box, Typography, styled } from '@mui/material'; // Note: changed import from '@mui/material' to '@mui/system';

const Image = styled(Box)`
    width: 100%;
    height: 50vh;
    background: url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg') center/cover no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;


const Banner = () => {
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Code for Interview</SubHeading>
        </Image>
    );
}

export default Banner;
