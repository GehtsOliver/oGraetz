import React from 'react'
import { useRouter } from "next/router"

const Project = () => {
    const router = useRouter()
    const { pid } = router.query
    
    return (
        <div>
            This is Project #{pid}
        </div>
    )
}

export default Project
