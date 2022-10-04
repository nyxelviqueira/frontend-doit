import "./serviceFinder.css";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useServices from "../../hooks/useServices";

import Autosuggest from "react-autosuggest";
import { useState } from "react";
import { Service } from "../service/Service";
import { Link } from "react-router-dom";

export const ServiceFinder = () => {
  const { services, loading, error } = useServices();
  const { user } = useContext(AuthContext);

  // estados xa el buscador
  const [searchServices, setSearchServices] = useState(services);
  const [value, setValue] = useState("");
  const [selectedService, setSelectedService] = useState({});

  if (loading) return <p>Reload services</p>;
  if (error) return <p>{error}</p>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSearchServices(filterServices(value));
  };

  const filterServices = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let filtered = services.filter((services) => {
      let completedText = services.title + " - " + services.description;

      if (
        completedText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      ) {
        return services;
      }
    });
    return inputLength === 0 ? [] : filtered;
  };

  // esta se llama cada vez q se borren las sugerencias
  const onSuggestionsClearRequested = () => {
    setSearchServices([]);
  };

  const getSuggestionValue = (suggestion) => {
    return `${suggestion.title} - ${suggestion.description}`;
  };

  const renderSuggestion = (suggestion) => (
    <div className="suggestion" onClick={() => selectService(suggestion)}>
      <Link to={`/services/${suggestion.id}`}>{`${suggestion.title}`}</Link>
    </div>
  );

  const selectService = (service) => {
    setSelectedService(service);

  };
  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Search services...",
    value,
    onChange,
  };

  const eventEnter = (e) => {
    if (e.key === "Enter") {
      let actualService = services.filter(
        (s) => s.title && s.description === e.target.value
      );

      let service = {
        title: actualService[0].trim(),
        category: actualService[0].trim(),
        description: actualService[0].trim(),
        username: actualService[0].trim(),
        file: actualService[0].trim(),
        realized: actualService[0].trim(),
        createdAt: actualService[0].trim(),
      };

      selectService(service);
    }
  };

  return (
    <>
      <div className="search-service">
        <Autosuggest
          suggestions={searchServices}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={eventEnter}
        />
        <br />
      </div>
    </>
  );
};
