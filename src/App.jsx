import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import './App.css'

function App() {
  const name = "Patel King Rajeshbhai"
  const age = 27
  const city = "Surat"
  return (
    <div>
      <Header name="King"/>
      Hello My name is { name }. I am { age } years old and I live in { city }.
      <Footer />
    </div>
  )
}

export default App
