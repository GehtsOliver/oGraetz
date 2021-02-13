import React from 'react'
import Image from "next/image";
import styled from "styled-components"


const Images = ({ className }) => {
    return (
        <div className={className}>
            <Image width={750} height={360}  src="/Coffeephilia.png"/>
            <Image width={750} height={360} src="/Coffeephilia.png"/>
            <Image width={750} height={360} src="/Coffeephilia.png"/>
        </div>
    )
}

const ImageContainer = styled(Images)`
display: flex;
column-gap: 1rem;
`;

export default ImageContainer
