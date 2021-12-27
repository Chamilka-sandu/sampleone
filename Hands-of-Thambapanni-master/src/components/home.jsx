import React from 'react'

import Profile from "./profiles";
import About from "./about";
import Features from "./features";
import Contact from "./contact";
import {Header} from "./header";
import { Navigation } from "./navigation";
import SimpleForm from "../components/SampleForm";


function Home() {
    return (
        <div>
            <div><Navigation/></div>
            <div><Header/></div>
            <div><About/></div>
            <div><Profile/></div>
            <div><Features/></div>
            <div><Contact /></div>
            <div><SimpleForm /></div>
        </div>
    )
}

export default Home
