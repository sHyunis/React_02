
import { Bests, Events, MainBanner } from '../components/index'


const Section = ()=>{
    return (
        <section style={ { width: "1200px", margin: "auto" } }>
            <MainBanner />
            <Events />
            <Bests />
        </section>
    )
}

export default  Section