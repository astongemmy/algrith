// export async function getStaticPaths() {
  // const products = getAllProducts()
  // return {
    // paths: products.map((product) => {
    //   return {
    //     params: {
    //       slug: [ product.slug, product.packages.id ]
    //       // slug: [ product.slug, 'b']
    //     }
    //   }
    // }),
//     paths: [],
//     fallback: false
//   }
// }
// export async function getStaticProps(params) {
//   // const slugs = params.slug
//   console.log(params)
//   return {
//     props: {
//       // Product: getProductBySlug(slugs[0]),
//       // Product: getProductBySlug(params.params.slug),
//     }
//   }
// }