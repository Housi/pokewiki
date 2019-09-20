/* eslint-disable no-underscore-dangle, react/forbid-prop-types */
import React from "react";
import { A } from "hookrouter";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const Pager = styled.ul`
  text-align: center
  list-style: none
`;

const PagerItem = styled.li`
  display: inline-block
  border-width: 2px 0 2px 2px
  border-style: solid 
  border-color: #eee
  padding: 2px 4px
  text-transform: uppercase
  font-weight: 600
  color: #999
  &:first-of-type {
    border-radius: 3px 0 0 3px
  }
  &:last-of-type {
    border-width: 2px
    border-radius: 0 3px 3px 0
  }
`;

const Link = styled(A)`
  text-decoration: none
  color: inherit
`;

function Pagination({ links, current }) {
  const { prev, next, first, last } = links;

  return (
    <nav>
      <Pager>
        {prev && (
          <>
            <PagerItem>
              <Link href={`/${first._page}`}>
                <Icon name="rewind" />
              </Link>
            </PagerItem>
            <PagerItem>
              <Link href={`/${prev._page}`}>
                <Icon name="left" />
                prev
              </Link>
            </PagerItem>
          </>
        )}
        <PagerItem>{`page ${current} of ${last._page}`}</PagerItem>
        {next && (
          <>
            <PagerItem>
              <Link href={`/${next._page}`}>
                next
                <Icon name="right" />
              </Link>
            </PagerItem>
            <PagerItem>
              <Link href={`/${last._page}`}>
                <Icon name="fastforward" />
              </Link>
            </PagerItem>
          </>
        )}
      </Pager>
    </nav>
  );
}

Pagination.propTypes = {
  links: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired
};

export default Pagination;
