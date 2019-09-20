import React from "react";
import PropTypes from "prop-types";

import usePokeApi from "../data/usePokeApi";
import PokeList from "../components/PokeList";
import Pagination from "../components/Pagination";

function Index({ page }) {
  const { data, links } = usePokeApi({ page, limit: 12 });

  if (data && links)
    return (
      <>
        <PokeList pokemons={data} />
        <Pagination links={links} current={page} />
      </>
    );
  return <p>no pokemons :(</p>;
}

Index.propTypes = {
  page: PropTypes.string.isRequired
};

export default Index;
