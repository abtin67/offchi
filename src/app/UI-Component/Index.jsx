"use client"


import Hero from './index/header/Hero'
import Category from '../UI-Component/index/categoreis/Category'
import Banner from './index/promotion-banner/Banner';
import Deals from '@/app/UI-Component/index/deals/deals';
import Offers from './index/Offers-Banner/Offers';
import Recommend from './index/Recommend/Recommend';
import HotDeals from './index/Hot-Deals/HotDeals';
import Vendors from './index/Vendors/Vandors';
import BestSales from './index/BestSales/BestSales';
import Banners from './index/banner/Banner';
import OrganicFood from './index/OrganicFood/OrganicFood';
import ShortProducts from './index/Short-Products/Products';
import Brands from './index/Brands/Brands';
import Arrivals from './index/New-Arrivals/Arrivals';
import Benefits from './index/Benefits/Benefits';
import Newsletter from './index/Newsletter/Newsletter';


export default function Index (){
    return(
        <>
            <Hero />
            <Category />
            <Banner />
            <Deals />
            <Offers />
            <Recommend />
            <HotDeals />
            <Vendors />
            <BestSales />
            <Banners />
            <OrganicFood />
            <ShortProducts />
            <Brands />
            <Arrivals />
            <Benefits />
            <Newsletter />
        </>
    )
}