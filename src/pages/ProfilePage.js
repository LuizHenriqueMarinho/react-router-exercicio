import { useNavigate, useParams } from 'react-router-dom'
import { goToHomePage } from '../Route/coordinator'

function ProfilePage() {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Página de perfil</h1>
      <button onClick={()=>goToHomePage(navigate)}>
        Ir para página inicial
      </button>
    </section>
  );
}

export {ProfilePage};
