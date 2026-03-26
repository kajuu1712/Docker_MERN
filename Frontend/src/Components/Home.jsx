import { useNavigate } from "react-router-dom";
import './Home.css'

export default function Home(){
    const navigate = useNavigate();
    return(
        <>
            <div className="home-page">
                <h1>Home page </h1>
                <button onClick={() => navigate("/signup")}>
                    Signup
                </button>
            </div>
        </>
    );
}