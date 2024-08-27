import BannerImage from "../../assets/banner1.jpeg"


function Banner(){


    return (
<div className="w-full h-[20rem] relative">
<img 
src={BannerImage}
className="h-full w-full relative object-cover"
/>
<div className="absolute top-10 left-0 right-0 mx-auto w-[20rem]">

    <div className="flex flex-col gap-4">

        <div className="font-semibold text-5xl text-white">
        Crypto Tracker
        </div>

        <div className="font-semibold text-sm text-white text-center">
        For all your CryptoCurrency Need
        </div>


    </div>
</div>

</div>






    )

}
export default Banner