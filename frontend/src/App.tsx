import { Header } from './components/Header/Header';
import { AppContextProvider } from './store/AppStore';
import { VMainScreen } from './views/VMainScreen/VMainScreen';

const App: React.FC = () => {
  /**
   * renderer
   */
  return (
    <AppContextProvider>
      <>
        <Header />

        <VMainScreen />
      </>
    </AppContextProvider>
  );
};

export default App;
