import { useDispatch, useSelector } from 'react-redux';
import { setCountry, getStatsAsync } from '../../redux/Stats/StatsSlice';
import ReactFlagsSelect from 'react-flags-select';
const { getName } = require('country-list');

function CountryPicker() {
  const dispatch = useDispatch();
  const {country} = useSelector((state) => state.stats.informations);

  const handleCountry = (selectedCountry) => {
    const name = getName(selectedCountry)

    dispatch(setCountry({ country: name }));
    dispatch(getStatsAsync(name));
  };

  return (
    <div style={{width:"350px" , margin: " 0 auto"}}>
      <ReactFlagsSelect
        selected={country}
        onSelect={handleCountry}
        placeholder="Turkey"
        searchable={true}
      />
    </div>
  );
}

export default CountryPicker;
