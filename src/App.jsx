import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Gennux!" />
      {/* Otros componentes o contenido relacionado con tu ecommerce */}
    </div>
  );
};

export default App;