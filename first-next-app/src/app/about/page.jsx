"use client";

import Link from 'next/link'
import PageLayout from './layout';
import { useRouter } from "next/navigation";


const About = () => {

    const router = useRouter();

    const handleNavigate = () => {

        router.back("about");
    };

    return (
        <div className="About">
        <h1>About</h1>
        <p>This is the about page.
        Nothing to see, go <Link href="/">home</Link>.</p>
        <button onClick={handleNavigate}>BACK</button>
        </div>
        );
       };

export default About;

// Check http://localhost:3000/about to see it in action
