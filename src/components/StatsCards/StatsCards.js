import { useSelector } from 'react-redux';
import StatsCard from '../StatsCard/StatsCard';

function StatsCards() {
  const counts = useSelector((state) => state.stats.counts);

  const countsArray = Object.values(counts);

  return (
    <div className="stats-cards">
      {
        countsArray.map((data, index) => (
          <StatsCard key={index} data={data} />
        ))
      }
    </div>
  );
}

export default StatsCards;
