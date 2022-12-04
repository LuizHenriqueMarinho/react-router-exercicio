import { useNavigate, useParams } from 'react-router-dom'
import { goToProfilePage } from '../Route/coordinator'
import { goToProductPage } from '../Route/coordinator'


function HomePage() {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Página inicial</h1>
      <button onClick={()=>goToProfilePage(navigate, "luiz")}>
        Ir para página de perfil
      </button>
      <button onClick={()=>goToProductPage(navigate, "PS5")} >Ir para Página de Produtos</button>
    </section>
  );
}

export { HomePage };
