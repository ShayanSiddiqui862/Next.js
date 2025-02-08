import { client } from '@/sanity/lib/client'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header-2'
import Navbar from '@/app/components/navbar'
import Shopcards from '@/app/components/shop-cards'
import Companies from '@/app/components/companies'
import Footer from '@/app/components/footer'
import Best from '@/app/components/best-seller'
import ProductPage from '@/app/components/Add-to-cart'
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

interface Props {
  params: Promise<{ slug: string }> 
  }

export default async function page({ params }: Props) {
   const { slug } = await params;
    const data = await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"]{
      title,
     _id,
     price,
     description,
      "slug": slug.current,
      "imageUrl": productImage.asset->url
    }`);
 
     return(
        <main className={`${montserrat.className} `}>
          <Header />
          <Navbar />
          <Shopcards />
           <ProductPage id={data[0]._id} price={data[0].price} description={data[0].description} title={data[0].title} image={data[0].imageUrl} /> 
          <Best />
          <Companies />
          <Footer />

        </main>
     )}