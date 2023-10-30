import AboutUs from "../components/AboutUs"
import Category from "../components/Category"
import ContactUs from "../components/ContactUs"
import Hero from "../components/Hero"
import { TeamMembers } from "../components/TeamMembers"

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Category />
            <AboutUs />
            <TeamMembers />
            <ContactUs />
        </div>
    )
}

export default Homepage