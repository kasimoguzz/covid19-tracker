import './App.css';
import Title from './components/Title/Title';
import StatsCards from './components/StatsCards/StatsCards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import BarChart from './components/BarChart/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStatsAsync } from './redux/Stats/StatsSlice';

function App() {
  const { country } = useSelector((state) => state.stats.informations);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (country) {
      dispatch(getStatsAsync(country));
    }
  }, [dispatch, country]);

  return (
    <div className="App">
      <Title />
      <StatsCards />
      <CountryPicker />
      <BarChart />
    </div>
  );
}

export default App;
