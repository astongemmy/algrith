import fs from 'fs'
import path from 'path'

const mockTestimonialsDirectory = path.join(process.cwd(), '/mock/testimonials')

export function getTestimonialSlugs() {
  return fs.readdirSync(mockTestimonialsDirectory)
}
export function getAllTestimonials() {
  const slugs = getTestimonialSlugs()
  const testimonials = slugs.map((slug) => getTestimonialBySlug(slug))
  return testimonials
}
export function getTestimonialBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = path.join(mockTestimonialsDirectory, `${realSlug}.json`)
  const testimonial = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  return testimonial
}