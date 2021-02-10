import React from 'react'
import Image from "next/image";



const ImageContainer = () => {
    return (
        <div style={{display: 'flex'}}>
            <Image width={750} height={360}  src="/Coffeephilia.png"/>
            <Image width={750} height={360} src="/Coffeephilia.png"/>
            <Image width={750} height={360} src="/Coffeephilia.png"/>
        </div>
    )
}

export default ImageContainer
