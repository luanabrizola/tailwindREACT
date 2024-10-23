import { TemaProvider } from "./context/TemaContexto"
import Home from "./pages/Home"


function App() {
  

  return (
    <TemaProvider>
      <Home />
    </TemaProvider>
  )
}

export default App
