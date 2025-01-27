import About from "./Components/About"
import Intro from "./Components/Intro"
import Passion from "./Components/Passion"
import Portfolio from "./Components/Portfolio"
import Professional from "./Components/Professional"
import PropertyCard from "./Components/PropertyCard"
import Propertyservice from "./Components/Propertyservice"
import Update from "./Components/Update"



const App = () => {
  return (
    <main>
    <About/>
    <Professional />
    <Portfolio/>    
      <Propertyservice/>
      <PropertyCard/>
      <Passion/>
      <Update/>
      <Intro/>
      </main>
  )
}

export default App
