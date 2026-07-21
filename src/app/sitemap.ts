import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/data/blog-posts'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://4cloverlabs.com'

  const cleanUrl = (url: string) => url.replace(/&/g, '&amp;')

  // Define images for static routes
  const routeImages: Record<string, string[]> = {
    '': [
      `${baseUrl}/favicon.ico`,
      `${baseUrl}/4cloverlabs-white-withoutbg.png`,
      `${baseUrl}/4cloverlabs-black-withoutbg.png`,
      `${baseUrl}/hero-bg.png`
    ],
    '/about': [
      `${baseUrl}/about_workspace_cinematic.png`,
      `${baseUrl}/about_studio_architectural.png`
    ],
    '/contact': [
      `${baseUrl}/business/linksmeet.jpg`,
      `${baseUrl}/cta.png`
    ],
    '/portfolio': [
      `${baseUrl}/pf-1.png`,
      `${baseUrl}/pf-2.png`,
      `${baseUrl}/pf-3.png`,
      `${baseUrl}/pf-4.png`
    ],
    '/blog': [
      `${baseUrl}/blog_featured.png`
    ]
  }

  // Base routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
    images: (routeImages[route] || []).map(cleanUrl),
  }))

  // Dynamic Blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    images: post.img ? [`${baseUrl}${post.img}`].map(cleanUrl) : [],
  }))

  // Dynamic Product/Project routes
  const productRoutes = products.map((product) => {
    const rawImages: string[] = []
    if (product.image) {
       rawImages.push(product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`)
    }
    if (product.secondaryImages) {
       product.secondaryImages.forEach(img => {
           rawImages.push(img.startsWith('http') ? img : `${baseUrl}${img}`)
       })
    }

    return {
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      images: rawImages.map(cleanUrl),
    }
  })

  return [...routes, ...blogRoutes, ...productRoutes]
}
