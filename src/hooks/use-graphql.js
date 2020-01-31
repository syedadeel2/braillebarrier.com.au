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
          fixed(width: 320) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      productsImage: file(
        relativePath: { eq: "need-braille-signage-image.png" }
      ) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      braille: file(relativePath: { eq: "braille.png" }) {
        childImageSharp {
          fixed(width: 224) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return data;
};

export default useGraphql;
