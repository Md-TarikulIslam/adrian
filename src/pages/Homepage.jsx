import AboutUs from "../components/AboutUs"
import Category from "../components/Category"
import Hero from "../components/Hero"
import { TeamMembers } from "../components/TeamMembers"

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Category />
            <AboutUs />
            <TeamMembers />
        </div>
    )
}

export default Homepage