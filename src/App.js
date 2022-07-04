import { CartProvider } from './Context/UseContext';
import './App.css';
import Router from './Router/Router';


// Components



const title = 'FRIHED ART';
function App ()  {	
		
return (
	<>
	<CartProvider>
		<Router/>
	</CartProvider>
	</>
);
};

export default App;