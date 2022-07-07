import './styles.css';
import Attribution from './components/Attribution'
import ProductPage from './pages/ProductPage';
import Header from './components/Headers';
import { ItemDetailsProvider } from './ItemDetailsContext';

function App() {
  return (
    <div className="App">
      <ItemDetailsProvider>
        <Header />
        <ProductPage />
        <Attribution />
      </ItemDetailsProvider>
    </div>
  );
}

export default App;
