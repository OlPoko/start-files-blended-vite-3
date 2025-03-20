import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';

const Country = () => {
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
        <Heading title="SearchCountry" bottom />
        
      </Container>
    </Section>
  );
};

export default Country;
