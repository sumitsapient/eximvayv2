import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Tea from '../assets/tea.jpg'
import Coffee from '../assets/coffee.jpg'
import Apparel from '../assets/apparel.jpg'
import Pearl from '../assets/pearl.jpg'
import Jwellery from '../assets/jwellery.jpg'
import Diamond from '../assets/diamond.jpg'


export const Carousel = () => {
  return (
    <>
    <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-full text-center">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold mt-8 ">FEATURED PRODUCTS</h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-100 mt-1  underline decoration-sky-500/30">Meet Our Handpicked Favorites</p>
     </div>

                <div className="container mx-auto">

        <div className="flex items-center justify-center w-full h-full py-8 sm:py-8 px-4">

            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={4} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Apparel} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Apparel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Coffee} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Coffee</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Pearl} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Pearl</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Jwellery} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Gold</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Diamond} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Diamond</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={2} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={30} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Apparel} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Apparel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Coffee} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Coffee</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Pearl} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Pearl</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Jwellery} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Gold</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Diamond} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Diamond</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={30} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={1} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={30} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Apparel} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Apparel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Coffee} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Coffee</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Pearl} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Pearl</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Tea} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Tea</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Jwellery} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Gold</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Diamond} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Diamond</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={30} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    </div>        
    </>
    
  )
}

