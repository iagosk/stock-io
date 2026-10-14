export default function DashboardView() {
  return (
    <div className="dashboard-view">
      <header className="flex flex">
        <div className="title">
          <h1>Sto<span>c</span>k-io<span>.</span></h1>
        </div>
        <nav className="flex">
          <a href="#" className="link flex">
            Início
            <img src="../../public/icons/caret-down-white.png" alt="down icon" />
          </a>
          <a href="#" className="link flex">
            Estoque
            <img src="../../public/icons/caret-down-white.png" alt="down icon" />
          </a>
          <a href="#" className="link flex">
            Categorias
            <img src="../../public/icons/caret-down-white.png" alt="down icon" />
          </a>
          <a href="#" className="link flex">
            Colaboradores
            <img src="../../public/icons/caret-down-white.png" alt="down icon" />
          </a>
        </nav>
        <div className="profile flex">
          <img src="../../public/icons/user.png" alt="users icon" />
          <img src="../../public/icons/caret-down.png" alt="users icon" />
        </div>
      </header>
    </div>
  )
}