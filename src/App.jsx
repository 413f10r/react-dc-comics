import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Links from "./data/links"
import Comics from "./data/comics"

function App() {


  return (
    <>
      <Header links={Links} />
      <Main comics={Comics} />
      <Footer />
    </>
  )
}

export default App