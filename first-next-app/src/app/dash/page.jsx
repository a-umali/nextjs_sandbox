"use client";
import { useRouter } from "next/navigation";


const Dash = () => {
    const router = useRouter();

    const handleNavigate = () => {

        router.push("about");
    };

    return (
        <div>
        <h1>DASHBOARD</h1>
        <button onClick={handleNavigate}>About Page</button>
        </div>
        );
       };

export default Dash;

// Check http://localhost:3000/about to see it in action
