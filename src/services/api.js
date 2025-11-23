// API calls (loading products)

export async function fetchProducts() {
  // Fetch products from API or data.json
  try {
    const response = await fetch('/data.json')
    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

