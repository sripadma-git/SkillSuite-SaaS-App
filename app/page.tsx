import { Button } from "@/components/ui/button"
import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"
const Page = () => {
  return (
<main>
    <h1>Popular Companions</h1>
    <section className="home-section">
        <CompanionCard 
        id= "123"
        name="Neural the Brain Explorer"
        topic="Neural Network of the Brain"
        subject="science"
        duration={45}
        color="#f6db89ff"
        />
        <CompanionCard 
        id= "456"
        name="Counsty the Number Wizard"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={45}
        color="#e5d0ff"/>
        <CompanionCard 
        id= "789"
        name="Verba the Vocabulary Builder"
        topic="language"
        subject="English Literature"
        duration={30}
        color="#b7def4ff"/>

    </section>
    <section className="home-section">
        <CompanionList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
    <CTA />

    </section>
</main>
  )
}

export default Page