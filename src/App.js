import Banner from "./Components/Banner.js/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Rows from "./Components/Rows/Rows";
import { action,trending,horror,romance,comedy} from "./Components/Constants/urls";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rows url={trending} title='Trending Movies'/>
    <Rows url={action} title='Action Movies' isSmall />
    <Rows url={horror} title='Horror Movies' isSmall />
    <Rows url={comedy} title='Comedy Movies' isSmall />
    <Rows url={romance} title='Romance Movies' isSmall />
    </div>
  );
}

export default App;
