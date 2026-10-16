import "./App.css";
import { NavLink } from "react-router";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="box">
      <header className="flex flex-row-sb">
        <div className="title">
          <h1>Sto<span>c</span>k-io<span>.</span></h1>
        </div>
        <nav className="flex">
          <a className="link" href="#home">Início</a>
          <a className="link" href="#resources">Recursos</a>
          <a className="link" href="#products">Produtos</a>
          <a className="link" href="#about">Sobre</a>
        </nav>
        <div className="buttons flex">
          <NavLink to="/login" className="button">Sing in</NavLink>
          <NavLink to="/signup" className="button">Sing up</NavLink>
        </div>
      </header>
      <Main/>
      <Footer />
    </div>
  )
}
