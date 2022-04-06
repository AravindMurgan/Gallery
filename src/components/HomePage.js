import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import styled from "styled-components";


function HomePage() {
    const LS = {};
    LS.NavFixedItem_LINK = styled(Link)`
    text-decoration:none;
    display:inline-block;
    font-size:1.5em;
    background:#fff;
    padding:10px 30px;
    color:#111;
    letter-spacing:1.5px;
    transition:0.2s;
    margin-top:20px;
    &:hover{
        letter-spacing:6px;

    }
    @media only screen and (max-width: 600px) {
        font-size:1em;
        background:#fff;
        padding:8px 20px;
        color:#111;
        letter-spacing:1px;
        margin-top:20px;
    }
    @media only screen and (min-width: 768px) {
        font-size:1.2em;
        background:#fff;
        padding:10px 23px;
        color:#111;
        letter-spacing:1.4px;
        margin-top:20px;
    }


  `;
    return (
        <div className='showcase' >
            <video src="memoriesVideo.mp4" muted loop autoPlay></video>
            <div className='overlay' ></div>
            <div className='text' >
                <h2>Die with Memories ,Not dreams</h2>
                <h3>Made with &hearts; for priya</h3>
                <LS.NavFixedItem_LINK to='gallery'  >Enter</LS.NavFixedItem_LINK >
            </div>
            {/* <Link to='gallery' >GALLERY</Link> */}
        </div>

    )
}

export default HomePage