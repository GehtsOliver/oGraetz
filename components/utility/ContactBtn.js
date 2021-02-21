import React from 'react'
import styled from "styled-components"

const ContactButton = ({ icon, link, className }) => {
    return (
        <a className={className} href={link}>
            <i className={icon}/>
        </a>
    )
}

const ContactBtn = styled(ContactButton)`
border: #fff 1px solid;
border-radius: 100%;
padding: 1rem;

:hover {
    transform: scale3d(1.1,1.1,1.1)
}

> i {
    font-size: 1.5rem;
}
`

export default ContactBtn
