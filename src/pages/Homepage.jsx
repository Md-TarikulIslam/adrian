import AboutUs from "../components/AboutUs"
import Category from "../components/Category"
import ContactUs from "../components/ContactUs"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import { TeamMembers } from "../components/TeamMembers"

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Category />
            <NewArrival />
            <AboutUs />
            <TeamMembers />
            <FAQ />
            <ContactUs />
        </div>
    )
}

export default Homepage