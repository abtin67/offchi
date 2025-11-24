
import Image from 'next/image';
import promotionBanner1 from '../../../../../public/promotional-banner-img1.png';
import promotionBanner2 from '../../../../../public/promotional-banner-img2.png';
import promotionBanner3 from '../../../../../public/promotional-banner-img3.png';
import promotionBanner4 from '../../../../../public/promotional-banner-img4.png';
import { CgShoppingCart } from 'react-icons/cg';

const banners =[
    {image:promotionBanner1,heading:"هر روز گوشت تازه"},
    {image:promotionBanner2,heading:"سبزیجات تازه روزانه"},
    {image:promotionBanner3,heading:"هرروز با شیر تازه"},
    {image:promotionBanner4,heading:"هر روز میوه تازه"},

]
export default function Banner (){
    return(
        <div className="px-[%8] lg:px-[12%] py-5">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                {banners.map((banner,index)=>(
                    <div className="relative px-5" key={index}>
                        <Image src={banner.image} alt={`banner ${index + 1}`} className='w-full mx-2' />
                        <div className="banner-content  absolute bottom-[5%] left-[4%]">
                            <h2 className='font-bold text-3xl leading-11 whitespace-pre-line'>
                                {banner.heading}
                            </h2>
                            <button className='px-5 py-3 rounded-full text-white font-bold mt-5 bg-[#299e60] flex justify-between gap-2 hover:bg-white hover:text-[#299e60]  hover:border-2'>
                                خرید <CgShoppingCart size={25} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}