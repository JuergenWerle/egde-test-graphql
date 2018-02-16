import React from 'react';
import Helmet from 'react-helmet';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const GraphQL = (props) => {
  return (
    <article>
      <Helmet title="GraphQL" />
    </article>
  );
};

const QUERY = gql`
  query GetComponent($id: ID!) {
    component(id: $id) {
      id
    }
  }
`;

const withQuery = graphql(QUERY, {
  options: {
    variables: { id: 'cjdfump3bwnbe0100ks3wbekj' }
  },
  props: ({ ownProps, data: { loading, component } }) => ({
    loading,
    component
  })
})(GraphQL);

export default withQuery;
