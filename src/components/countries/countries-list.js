import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../../actions";

const CountriesList = (props) => {
  const [current, setCurrent] = useState('3');

  useEffect(() => {
    props.fetchCountries(props.countries);
  }, []);

  return (
    <div>
      <ul className="list-countries">
        {props.countries.map((country, index) => (
          <li className="list-countries__item" key={country.id}>
            <a onClick={() => setCurrent(country.value)} className={country.value === current ? "active" : null}>
              {country.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('country state: ',state );
  return {
    
    countries: state.countriesReducer.countries,
  };
};

export default connect(mapStateToProps, { fetchCountries })(CountriesList);
