import { Nav } from "../components/Header"
export const Home = ()=>{
    return(

        <div className="Home">
            
            <Nav/>
            <div className="Profile_photo">
            <img className = "profile-img" src="profile.png" alt="" />
            </div>


            <div className="Intro">
                <p>HI!, Myself <span>ADITHYA BHARADWAJ C </span></p>
                <p>I AM A <span>STUDENT / SOFTWARE DEVELOPER</span></p>
                <div className="info">
                <p>Currently pursuing B-TECH at IIITDM Kancheepuram. <br />
                A passionate enthusiast in the field of web development. <br />
                Experienced in developing websites using diverse tools and technologies.</p>
            </div>
            </div>

        </div>
        
    )
}