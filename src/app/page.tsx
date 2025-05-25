import Container from '@/components/ui/container'
import ProductList from '@/components/product-list'
import React from 'react'
import Billboard from '@/components/billboard'
import getBillboard from '../../actions/get-billboard'
import getProducts from '../../actions/get-products'


export const revalidate = 0 // always fetch fresh data on every request

const Home = async() => {

  const billboard = await getBillboard("2de73f8d-e912-4771-80c4-3559e6469835");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className='space-y-10'>
        <Billboard data={billboard}/>
      </div>

      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title='Feature Products' items={products}/>
      </div>
    </Container>
  )
}

export default Home