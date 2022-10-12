import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AppContextProvider } from './store/AppStore';
import { VMainScreen } from './views/VMainScreen/VMainScreen';

const App: React.FC = () => {
  /**
   * renderer
   */
  return (
    <AppContextProvider>
      <div className="h-screen flex flex-col">
        <Header />
        <VMainScreen />
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default App;
