import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <header className="flex flex-row-sb">
        <div className="title">
          <h1>Sto<span>c</span>k-io<span>.</span></h1>
        </div>
        <nav className="flex">
          <a className="link" href="#home">Início</a>
          <a className="link" href="#resources">Recursos</a>
          <a className="link" href="#products">Produtos</a>
        </nav>
        <div className="buttons flex">
          <button className="button">Sing in</button>
          <button className="button">Sing up</button>
        </div>
      </header>
      <Main/>
      <Footer />
    </div>
  )
}
