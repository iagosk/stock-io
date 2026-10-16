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
          <section className="flex flex-column-center">
            <div className="content-stock grid grid-cl-2">
              <div className='image-stock' id='stock'></div>
              <div className="text-stock flex flex-column-center">
                <h2>Estoque</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quia natus, quidem minus porro explicabo ratione, eaque dolorum deserunt aperiam eligendi quibusdam magni? Fuga repudiandae, necessitatibus veritatis doloribus molestias ipsam.</p>
              </div>
            </div>
            <div className="content-stock grid grid-cl-2">
              <div className='image-stock' id='team04'></div>
              <div className="text-stock flex flex-column-center">
                <h2>Colaboradores</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quia natus, quidem minus porro explicabo ratione, eaque dolorum deserunt aperiam eligendi quibusdam magni? Fuga repudiandae, necessitatibus veritatis doloribus molestias ipsam.</p>
              </div>
            </div>
          </section>
          <section className="flex flex-column-center">
            <div className="content-stock grid grid-cl-2">
              <div className='image-stock' id='reports'></div>
              <div className="text-stock flex flex-column-center">
                <h2>Relatórios</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quia natus, quidem minus porro explicabo ratione, eaque dolorum deserunt aperiam eligendi quibusdam magni? Fuga repudiandae, necessitatibus veritatis doloribus molestias ipsam.</p>
              </div>
            </div>
            <div className="content-stock grid grid-cl-2">
              <div className='image-stock' id='stock'></div>
              <div className="text-stock flex flex-column-center">
                <h2>Estoque</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, quia natus, quidem minus porro explicabo ratione, eaque dolorum deserunt aperiam eligendi quibusdam magni? Fuga repudiandae, necessitatibus veritatis doloribus molestias ipsam.</p>
              </div>
            </div>
            
          </section>
        </section>
      </main>
    </div>
  )
}