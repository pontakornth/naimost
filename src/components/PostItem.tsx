import React from "react"
import {Box, Text, Heading, Stack} from '@chakra-ui/core'
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const PostItem = ({title, excerpt, image, link}) => (
    <Box>
        <Link to={link}>
            <Img fluid={image} />
            <Heading mt={4} as="h3" size="xl">{title}</Heading>
        </Link>
        <Text dangerouslySetInnerHTML={excerpt}></Text>
    </Box>
)

export default PostItem