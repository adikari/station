import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const PROJECTS_QUERY = gql`
  query Projects() {
    projects {
      id
      name
      description
    }
  }
`;

export const useProjects = () => {
  const { loading, error, data } = useQuery(PROJECTS_QUERY);

  const projects = !loading && data ? data.projects : [];

  return { loading, error, projects };
};
