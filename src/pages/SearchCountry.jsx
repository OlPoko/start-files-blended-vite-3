import { useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';


const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountriesByRegion = async region => {
    setLoading(true);
    try {
      const data = await fetchByRegion(region);
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={fetchCountriesByRegion} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
