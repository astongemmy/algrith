import fs from 'fs'
import path from 'path'

const mockProductsDirectory = path.join(process.cwd(), '/mock/products')

export function getAllProductIds() {
  const fileNames = fs.readdirSync(mockProductsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}
export function getProductData(id) {
  const fullPath = path.join(mockProductsDirectory, `${id}.json`)
  const products = fs.readFileSync(fullPath, 'utf8')
  return {
    id,
    products
  }
}