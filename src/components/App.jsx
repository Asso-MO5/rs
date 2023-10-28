import { Description } from './Description';
import { Donation } from './Donation';
import { Links } from './Links';
import { Header } from './header';
import { Rs } from './rs';

function App() {
  return (
    <div className="flex flex-col m-auto max-w-lg h-screen">
      <Header />
      <Rs />
      <Description />
      <Donation />
      <Links />
    </div>
  );
}

export default App;
