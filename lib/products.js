import fs from 'fs'
import path from 'path'

const mockProductsDirectory = path.join(process.cwd(), '/mock/products')

export function getProductSlugs() {
  return fs.readdirSync(mockProductsDirectory)
}
export function getAllProducts() {
  const slugs = getProductSlugs()
  const products = slugs.map((slug) => getProductBySlug(slug))
  return products
  // const products = ids.map((id) => getProductById(id))
    // .sort((p1, p2) => (p1.date > p2.date ? -1 : 1))
  // return ids.map((id) => {
  //   return {
  //     params: {
  //       id: id.replace(/\.json$/, '')
  //     }
  //   }    
  // })
}
// export function getAllProducts() {
//   const slugs = getProductSlugs()
//   const products = slugs.map((slug) => getProductsBySlug(slug))
//   return products
// }
export function getProductBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = path.join(mockProductsDirectory, `${realSlug}.json`)
  const product = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  return product
}
// export function getProductBySlug(slug) {
//   const realSlug = slug.replace(/\.json$/, '')
//   const fullPath = path.join(mockProductsDirectory, `${realSlug}.json`)
//   const product = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
//   return {
//     slug: realSlug,
//     product,
//     selected: product.packages.filter((pack) => pack.active)[0]
//   }
// }