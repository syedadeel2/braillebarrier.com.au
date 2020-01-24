import { useStaticQuery, graphql } from 'gatsby';

const useGraphql = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          address
          ABN
          phone
          email
        }
      }
      homeImage: file(relativePath: { eq: "home-image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      needBrailleSignageImage: file(
        relativePath: { eq: "need-braille-signage-image.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return data;
};

export default useGraphql;
