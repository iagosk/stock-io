import DropdownEstoque from '../components/DropdownEstoque';
import DropdownEquipe from '../components/DropdownEquipe';
import DropdownRelatorios from '../components/DropdownRelatorios';
import DropdownProfile from '../components/DropdownProfile';
import { Outlet, NavLink } from 'react-router';

export default function DashboardView() {
  return (
    <div className="dashboard-view">
      <header className="header-dashboard flex flex">
        <div className="title">
          <h1>Sto<span>c</span>k-io<span>.</span></h1>
        </div>
        <nav className="none flex flex-row-center">
          <NavLink className="dashboard-link" to="/dashboard">Home</NavLink>
          <DropdownEstoque />
          <DropdownEquipe />
          <DropdownRelatorios />
        </nav>
        <div className="profile flex">
          <DropdownProfile />
        </div>
      </header>
      <main>
        <section id='inicio' className='flex flex-row-center'>
          <Outlet />
        </section>
      </main>
    </div>
  )
}