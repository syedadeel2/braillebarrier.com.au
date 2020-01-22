import { useStaticQuery, graphql } from 'gatsby';

const useGraphql = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          address
          ABN
          phone
          email
        }
      }
    }
  `);
  return data;
};

export default useGraphql;
