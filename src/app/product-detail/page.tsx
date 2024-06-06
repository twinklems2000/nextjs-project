import { Suspense } from 'react'

import { Product } from '@/components/product'
import { Review } from '@/components/review'

export default function ProductDetail() {
  return (
    <>
      <h1>Product Detail</h1>
      <Suspense fallback={<p>Product loading...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Review loading...</p>}>
        <Review />
      </Suspense>
    </>
  )
}
