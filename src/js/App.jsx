import '../css/index.css'
import Header from '../js/Header'
import Introduction from '../js/Introduction'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import ScrollUp from './ScrollUp'


function App() {
  return (
    <>
    <div className="container-fluid">
      <Header></Header>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </div>
    </>
  )
}

export default App
