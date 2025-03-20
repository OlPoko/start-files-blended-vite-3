import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
