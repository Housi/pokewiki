import React from "react";
import PropTypes from "prop-types";

import usePokeApi from "../data/usePokeApi";
import PokeList from "../components/pokemon/PokeList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

function Index({ page }) {
  const { data, links, loading } = usePokeApi({ page, limit: 12 });

  if (!loading && data && links)
    return (
      <>
        <PokeList pokemons={data} />
        <Pagination links={links} current={page} />
      </>
    );
  return <Loader />;
}

Index.propTypes = {
  page: PropTypes.string.isRequired
};

export default Index;
