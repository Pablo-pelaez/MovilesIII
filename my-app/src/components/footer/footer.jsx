import { react, useState } from 'react'
const Footer = ({fecha}) => {
    return (
        <div className="jumbotron text-center" style={{"marginBottom":"0px"}}>
            <p>All Rights Reserved {fecha}</p>
        </div>

    )
}
export default Footer;