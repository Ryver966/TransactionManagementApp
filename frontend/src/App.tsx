import { Header } from './components/Header/Header';
import { VMainScreen } from './views/VMainScreen/VMainScreen';

const App: React.FC = () => {
  /**
   * renderer
   */
  return (
    <>
      <Header />

      <VMainScreen />
    </>
  );
};

export default App;
