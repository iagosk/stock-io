import DropdownEstoque from '../components/DropdownEstoque';
import DropdownColaboradores from '../components/DropdownColaboradores';
import DropdownRelatorios from '../components/DropdownRelatorios';
import DropdownProfile from '../components/DropdownProfile';

export default function DashboardView() {
  return (
    <div className="dashboard-view">
      <header className="flex flex">
        <div className="title">
          <h1>Sto<span>c</span>k-io<span>.</span></h1>
        </div>
        <nav className="flex">
          <DropdownEstoque />
          <DropdownColaboradores />
          <DropdownRelatorios />
        </nav>
        <div className="profile flex">
          <DropdownProfile />
        </div>
      </header>
      <main>
        <section id='inicio' className='flex flex-row-center'>
          <section className="flex flex-row-center">
            <div className="dashboard-box" id='image-stock'>
              <div className="content-box flex flex-column flex-column-end">
                <h2>Estoque</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt quos ducimus fugiat soluta enim nostrum dicta eos, consequatur perferendis ex dolores asperiores assumenda, nisi fugit, doloremque aperiam et? Ut?</p>
              </div>
            </div>
            <div className="dashboard-box" id='image-team'>
              <div className="content-box flex flex-column flex-column-end">
                <h2>Colaboradores</h2>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt quos ducimus fugiat soluta enim nostrum dicta eos, consequatur perferendis ex dolores asperiores assumenda, nisi fugit, doloremque aperiam et? Ut?</p>
              </div>
            </div>
            <div className="dashboard-box" id='image-reports'>
              <div className="content-box flex flex-column flex-column-end">
                <h2>Relatórios</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt quos ducimus fugiat soluta enim nostrum dicta eos, consequatur perferendis ex dolores asperiores assumenda, nisi fugit, doloremque aperiam et? Ut?</p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}