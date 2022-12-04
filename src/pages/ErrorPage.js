import { useNavigate, useParams } from 'react-router-dom'
import { goToHomePage } from '../Route/coordinator' 

function ErrorPage() {
  const navigate = useNavigate()
  
  return (
    <section>
      <h1>Página não encontrada</h1>
      <button onClick={()=>goToHomePage(navigate)}>
        Ir para página inicial
      </button>
    </section>
  );
}

export { ErrorPage };
