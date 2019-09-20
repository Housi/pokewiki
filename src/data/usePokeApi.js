/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from "react";
import parseLinks from "parse-link-header";

import client from "./client";

const usePokeApi = ({ page, limit }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await client.get("pokemon", {
        params: { _page: page, _limit: limit }
      });
      const parsedLinks = parseLinks(response.headers.link);
      setData(response.data);
      setLinks(parsedLinks);
      setLoading(false);
    }
    fetchData();
  }, [page, limit]);

  return { loading, links, data };
};

export default usePokeApi;
