import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  return (
    <Grid>
      {' '}
      {countries.map((country, index) => (
        <GridItem key={index}>
          {' '}
          <Link to={`/country/${country.name}`}>
            {' '}
            <img src={country.flag} alt={`${country.name} flag`} />{' '}
            <p>{country.name}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;
