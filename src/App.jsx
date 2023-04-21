import { useEffect, useState } from "react";
import "./App.css";

const NAVIGATION_EVENT = 'pushstate'

function navigate(href){
  window.history.pushState({},'', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}


function HomePage() {
  return (
    <>
      <p>Esta es la home</p>
      <button onClick={()=> {navigate('/about')}}  href="/about">Ir a Sobre nosotros</button>
    </>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr0jRJltN8qi1jMe88-hixKfjTBO8ljGdNo7TUKYzI1Us4oWaIwxMo5t1-Kd4RfhXxZ8&usqp=CAU"
          alt="dayan arango"
        />
        <p>¡Hola soy dayan! y estas en mi clon de react router</p>
        <button onClick={()=> {navigate('/')}} href="/">Home</button>
      </div>
    </>
  );
}


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{

    const onLocationsChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(NAVIGATION_EVENT, onLocationsChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationsChange)
    }
  }, [])


  return (
    <main>
    {
      currentPath === '/' && <HomePage />
    }
    {
      currentPath === '/about' && <AboutPage />
    }
    </main>
  );
}

export default App;
