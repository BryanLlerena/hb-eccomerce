import Hero from "./components/Hero"
import Banner from "./components/Banner"
import Friends from './components/Friends'
import './styles.css'

const Manu = () => {
  return(
    <div className="manufest-container">
      <Banner/>
      <Friends/>
      {/* <Hero/> */}
    </div>
  )
}

export default Manu