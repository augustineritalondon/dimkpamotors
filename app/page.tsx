"use client";

import { useState } from "react";

import Image from "next/image";
import { Call, DirectSend, Instagram } from "iconsax-react";
import { Location } from "iconsax-react";
// import useEmblaCarousel from "embla-carousel-react";
// import { useEffect } from "react";
// import AutoScroll from "embla-carousel-auto-scroll";

export default function Home() {
  const images = [
    "/galleryImages/1.jpeg",
    "/galleryImages/2.jpeg",
    "/galleryImages/3.jpeg",
    "/galleryImages/4.jpeg",
    "/galleryImages/5.jpeg",
    "/galleryImages/6.jpeg",
    "/galleryImages/7.jpeg",
    "/galleryImages/8.jpeg",
    "/galleryImages/9.jpeg",
    "/galleryImages/10.jpeg",
    "/galleryImages/11.jpeg",
    "/galleryImages/12.jpeg",
    "/galleryImages/13.jpeg",
    "/galleryImages/14.jpeg",
    "/galleryImages/15.jpeg",
    "/galleryImages/16.jpeg",
    "/galleryImages/17.jpeg",
    "/galleryImages/18.jpeg",
    "/galleryImages/19.jpeg",
    "/galleryImages/20.jpeg",
    "/galleryImages/21.jpeg",
    "/galleryImages/22.jpeg",
    "/galleryImages/23.jpeg",
    "/galleryImages/24.jpeg",
    "/galleryImages/25.jpeg",
    "/galleryImages/26.jpeg",
    "/galleryImages/27.jpeg",
  ];
  // const cards = [
  //   {
  //     id: 1,
  //     image: `/1.png`,
  //   },
  //   {
  //     id: 2,
  //     image: `/2.png`,
  //   },
  //   {
  //     id: 3,
  //     image: `/r34.png`,
  //   },
  //   {
  //     id: 4,
  //     image: `/r43.png`,
  //   },
  //   {
  //     id: 5,
  //     image: `/WhatsApp Image 2021-12-01 at 12.22 1.png`,
  //   },
  //   {
  //     id: 6,
  //     image: `/image.png`,
  //   },
  //   {
  //     id: 7,
  //     image: `/1.png`,
  //   },
  //   {
  //     id: 8,
  //     image: `/2.png`,
  //   },
  //   {
  //     id: 9,
  //     image: `/2 1.png`,
  //   },
  // ];

  // const PartnerCard = ({ image, text }: { image: string; text: string }) => {
  //   return (
  //     <div className="flex h-full w-full items-center justify-center ">
  //
  //       <Image
  //         src={image}
  //         alt={text}
  //         width={2000}
  //         height={640}
  //         className="h-auto max-h-96 w-full rounded-xl object-contain"
  //       />
  //
  //     </div>
  //   );
  // };

  // const [emblaRef, emblaApi] = useEmblaCarousel(
  //   {
  //     align: "start",
  //     dragFree: true,
  //     loop: true,
  //   },
  //   [AutoScroll({ playOnInit: true })]
  // );
  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll;
  //   if (!autoScroll) return;
  // }, [emblaApi]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 6));
  const [loadMore, setLoadMore] = useState(true);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    const nextImages = images.slice(
      displayedImages.length,
      displayedImages.length + 6
    );
    if (nextImages.length === 0) {
      setLoadMore(false); // Disable load more button if there are no more images to load
    }
    setDisplayedImages((prev) => [...prev, ...nextImages]);
  };

  return (
    <div>
      <div
        id="home"
        className=" bg-[url('/image.png')] bg-cover bg-center bg-no-repeat h-[100vh] relative"
      >
        <div className="bg-black/70 absolute inset-0 z-0"></div>

        <nav className="flex justify-between items-center p-4 z-[20] relative w-[90%] mx-auto">
          <div>
            <Image
              src="/galleryImages/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-14 lg:w-20"
            />
          </div>

          <div className=" text-white">
            <ul className="flex gap-5">
              <li>
                <a href="#home">Home</a>
              </li>
              <li className="hidden lg:block">
                <a href="#about">About Us</a>
              </li>
              <li className="hidden lg:block">
                <a href="#services">Services</a>
              </li>
              <li className="hidden lg:block">
                <a href="#ballistic">Ballistic Level</a>
              </li>
              <li className="hidden lg:block">
                {" "}
                <a href="#gallery">Gallery</a>
              </li>
              <li className="hidden lg:block">
                {" "}
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="relative lg:absolute text-center lg:text-left lg:top-[40%] lg:left-[5%] py-64 lg:py-0">
          <h1 className="text-white lg:text-black text-[48px] lg:text-[80px] font-bold">
            {/* Text shadow */}
            <span className="hidden lg:block absolute inset-0 text-white opacity-100 transform translate-x-1 translate-y-1">
              Dimkpa Motors
            </span>
            {/* Actual text */}
            Dimkpa Motors
          </h1>
          <p className="text-[#FFDB7A] text-2xl ">
            We specialize in guaranteeing the protection of our clients and
            trusted customers.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/banner-bottom.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </div>

      <div id="about" className="w-[90%] mx-auto relative my-[112px] ">
        <div className="lg:flex gap-10">
          <div className="lg:w-1/2 rounded-xl overflow-hidden">
            <Image
              src="/galleryImages/about us.jpg"
              alt="car"
              width={1000}
              height={1000}
              className=" w-full h-[450px] aspect-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 relative mt-5 lg:mt-0">
            <h1 className="text-[38px] lg:text-[72px] font-black text-[#000] absolute -z-10 lg:-left-[140px] lg:-top-[48px] opacity-5 -mt-2 lg:mt-0">
              {/* DIMKPA MOTORS */}
            </h1>
            <h1 className="text-[36px] font-black text-[#000]">About Us</h1>
            <p className=" text-xl mt-5">
              We are Dimkpa Motors, a company that specialize in Bullet-
              Resistant/Armoured Security Vehicle Nigeria. People and Companies
              that are in High-Risk environment can benefit the most from our
              services by using these security vehicles. <br />
              This guarantees them of a safe transport from one place to
              another. Our vehicles are built to meet International ballistic
              standards (CEN, NIJ, VPAM, STANAG) of Ballistic Protection.
            </p>{" "}
            <br />
            <p className=" text-xl">
              Premium materials and precise craftsmanship complemented with deep
              experience within the industry allows us to provide efficient
              solutions for our customers.
            </p>
            <button className="bg-[#FFBA49] shadow-md text-black p-3 px-6 rounded-3xl mt-5 lg:mt-0 lg:absolute lg:bottom-0 font-bold">
              <a href="#footer">Contact us</a>
            </button>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="bg-[#d7f4f99b] mt-[150px] relative overflow-hidden py-20 pb-32"
      >
        <div>
          <Image
            src="/Group 85.png"
            alt="logo"
            width={100}
            height={100}
            className=" w-full absolute top-0 left-0 z-0"
          />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-[24px] lg:text-[36px] font-bold text-[#000]">
            Our Services
          </h1>
          <p className="lg:text-lg">
            We invite you to explore our services, and we personally guarantee
            that you will be completely satisfied.
          </p>
        </div>

        <div className="lg:flex gap-16 flex-wrap justify-center items-center relative z-10 px-5 lg:px-0">
          <div className="relative bg-white rounded-3xl p-5 shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] text-center lg:w-1/4 h-[350px] flex flex-col justify-center my-14 lg:my-0">
            <svg
              width="40"
              height="40"
              className="mx-auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_linear_11_124)"
              />
              <path
                d="M24.216 20.9428V26.4508H28.896V46.1428H36.024V20.9428H24.216Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11_124"
                  x1="42.5544"
                  y1="1.68337"
                  x2="16.7691"
                  y2="66.6551"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <h1 className="text-[24px] font-bold mt-5 mb-2 ">
                Armoured Vehicles
              </h1>
              <p className="text-lg">
                We sell Specialized Armoured Civilian Security Vehicles such as,
                Armoured Toyota Land Cruiser, Armoured Lexus LX570, Armoured
                Mercedes-Benz G63 AMG, etc.
              </p>
            </div>

            {/* <div className="absolute left-0 -bottom-16 ">
              <Image
                src="/image 31.png"
                alt="car"
                width={1000}
                height={1000}
                className="w-[200px] opacity-100 relative z-0 "
              />
            </div> */}
          </div>
          <div className="relative bg-white rounded-3xl p-5 shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] text-center lg:w-1/4 h-[350px] flex flex-col justify-center my-14 lg:my-0">
            <div className="absolute -bottom-6 -left-6 -z-10">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
                  fill="#DF6951"
                />
              </svg>
            </div>

            <svg
              width="40"
              height="40"
              className="mx-auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_linear_23_166)"
              />
              <path
                d="M31.98 40.4908L36.732 36.0988C40.332 32.7868 41.016 30.5548 41.016 28.1068C41.016 23.4268 37.02 20.4388 31.224 20.4388C26.256 20.4388 22.692 22.5268 20.784 25.6948L26.076 28.6468C27.084 27.0268 28.74 26.1988 30.576 26.1988C32.736 26.1988 33.816 27.1708 33.816 28.7908C33.816 29.8348 33.528 30.9868 31.512 32.8588L22.08 41.6788V46.1428H41.7V40.4908H31.98Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_23_166"
                  x1="42.5544"
                  y1="1.68337"
                  x2="16.7691"
                  y2="66.6551"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <h1 className="text-[24px] font-bold mt-5 mb-2">
                Armoured Vehicles Spare Parts
              </h1>
              <p className="text-lg">
                We possess a wide array of spare parts for armoured vehicles, no
                matter your needs.
              </p>
            </div>

            {/* <div className="absolute left-0 -bottom-16 ">
              <Image
                src="/image 31.png"
                alt="car"
                width={1000}
                height={1000}
                className="w-[200px] opacity-100 relative z-0 "
              />
            </div> */}
          </div>
          <div className="relative bg-white rounded-3xl p-5 shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] text-center lg:w-1/4 h-[350px] flex flex-col justify-center my-14 lg:my-0">
            <svg
              width="40"
              height="40"
              className="mx-auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_linear_23_167)"
              />
              <path
                d="M34.148 31.0228L39.368 25.4068V20.9428H21.152V26.4508H31.088L26.588 31.3108V35.8108H29.576C32.312 35.8108 33.428 36.7468 33.428 38.2588C33.428 39.9508 31.844 40.8868 29.432 40.8868C27.056 40.8868 24.464 40.1668 22.448 38.7988L19.856 44.1628C22.448 45.7828 26.156 46.6468 29.648 46.6468C37.244 46.6468 40.628 42.5428 40.628 38.2588C40.628 34.6588 38.396 31.9228 34.148 31.0228Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_23_167"
                  x1="42.5544"
                  y1="1.68337"
                  x2="16.7691"
                  y2="66.6551"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <h1 className="text-[24px] font-bold mt-5 mb-2">
                Armoured Vehicles Rental Services
              </h1>
              <p className="text-lg mb-5">
                We offer reliable and superior protection for the transport of
                government leaders, especially in hazardous areas.
              </p>
            </div>

            {/* <div className="absolute left-0 -bottom-16 ">
              <Image
                src="/image 31.png"
                alt="car"
                width={1000}
                height={1000}
                className="w-[200px] opacity-100 relative z-0 "
              />
            </div> */}
          </div>
          <div className="relative bg-white rounded-3xl p-5 shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] text-center lg:w-1/4 h-[350px] flex flex-col justify-center my-14 lg:my-0">
            <svg
              width="40"
              height="40"
              className="mx-auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_linear_23_169)"
              />
              <path
                d="M42.984 35.6668H39.24V31.3828H32.508V35.6668H27.396L37.656 20.9428H30.276L18.972 36.6748V41.3188H32.292V46.1428H39.24V41.3188H42.984V35.6668Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_23_169"
                  x1="42.5544"
                  y1="1.68337"
                  x2="16.7691"
                  y2="66.6551"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <h1 className="text-[24px] font-bold mt-5 mb-2">
                Armoured Vehicle Maintenance
              </h1>
              <p className="text-lg">
                We ensure that all parts of the armour are in perfect condition
                to ensure the safety of the vehicle.
              </p>
            </div>

            {/* <div className="absolute left-0 -bottom-16 ">
              <Image
                src="/image 31.png"
                alt="car"
                width={1000}
                height={1000}
                className="w-[200px] opacity-100 relative z-0 "
              />
            </div> */}
          </div>
          <div className="relative bg-white rounded-3xl p-5 shadow-[0px_1.85px_3.15px_#00000001,0px_8.15px_6.52px_#00000002,0px_20px_13px_#00000003,0px_38.52px_25.48px_#00000003,0px_64.81px_46.85px_#00000004,0px_100px_80px_#00000005] text-center lg:w-1/4 h-[350px] flex flex-col justify-center my-14 lg:my-0">
            <svg
              width="40"
              height="40"
              className="mx-auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_linear_23_168)"
              />
              <path
                d="M30.656 30.1228H28.964L29.288 26.4508H39.44V20.9428H23.384L22.124 35.6668H28.964C32.816 35.6668 33.86 36.6748 33.86 38.2228C33.86 39.9148 32.24 40.8868 29.828 40.8868C27.416 40.8868 24.896 40.1668 22.844 38.7988L20.288 44.1628C22.844 45.7828 26.552 46.6468 30.044 46.6468C37.64 46.6468 41.024 42.5428 41.024 38.0428C41.024 33.5788 38.108 30.1228 30.656 30.1228Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_23_168"
                  x1="42.5544"
                  y1="1.68337"
                  x2="16.7691"
                  y2="66.6551"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#000" />
                  <stop offset="1" stop-color="#000" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <h1 className="text-[24px] font-bold mt-5 mb-2">
                Armouring of Soft Skin Vehicles
              </h1>
              <p className="text-lg">
                We up-armour and convert any vehilcle into a customized bullet
                resistance vehicle for VPS, Security Forces, etc.
              </p>
            </div>

            {/* <div className="absolute left-0 -bottom-16 ">
              <Image
                src="/image 31.png"
                alt="car"
                width={1000}
                height={1000}
                className="w-[200px] opacity-100 relative z-0 "
              />
            </div> */}
          </div>
        </div>
      </div>

      <div id="ballistic" className=" relative ">
        <div className="absolute -top-10 lg:-top-20 left-0 w-full">
          <Image
            src="/banner-bottom.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>

        <div className="pt-10">
          <Image
            src="/WhatsApp Image 2021-11-22 at 11.33 1 (1).png"
            className="w-[971px] h-[482px] mx-auto"
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="mt-16 lg:mt-[112px] w-[90%] mx-auto ">
        <Image
          src="/11 1.png"
          className="w-full mx-auto"
          alt="logo"
          width={1000}
          height={1000}
        />
      </div>

      <section id="gallery" className="embla relative w-[90%] mx-auto ">
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/Group 86.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[472px]"
          />
        </div>
        <div className="pt-16 lg:pt-[122px]">
          <h1 className="text-[38px] font-bold text-[#000] text-center">
            Gallery
          </h1>

          <div className="mt-5 lg:mt-10">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {displayedImages.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openModal(src)}
                  />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {loadMore && (
              <div className="flex justify-center my-4 mt-10">
                <button
                  onClick={loadMoreImages}
                  className="px-4 py-2 text-black bg-[#FFBA49] rounded-3xl hover:bg-[#FFBA49] font-bold  cursor-pointer relative z-[80]"
                >
                  Load More Images
                </button>
              </div>
            )}

            {selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[200]">
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-[300px] h-[400px] lg:max-w-[700px] lg:max-h-[700px] rounded shadow-lg"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white text-3xl"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* <div className="embla__viewport" ref={emblaRef}>
                    
            <div className="embla__container">
                        
              {cards.map((card, index) => (
                <div className="embla__slide" key={index}>
                                
                  <PartnerCard image={card.image} text="{card.text}" />
                              
                </div>
              ))}
                      
            </div>
                           
          </div> */}
        </div>
      </section>

      <footer
        id="footer"
        className="bg-[url('/image.png')] relative pt-5 lg:pt-10 mt-16 lg:mt-32"
      >
        <div className="bg-[#000000e7] absolute inset-0 z-0"></div>

        <div className="relative z-10 lg:flex justify-around gap-10 w-[90%] mx-auto pt-5">
          <div className="lg:w-[25%] text-white my-5 lg:my-0">
            <h1 className="font-bold text-2xl text-[#FFBA49]">Dimkpa Motors</h1>
            <p className="mt-5">
              We are a company that specialize in Bullet-Resistant/Armoured
              Security Vehicle in Nigeria. With our global broad network of
              partners, suppliers and vendors, cutting edge technology platforms
              and in-depth market experise we are commited to delivering
              cost-effective and custom tailored solutions to respond to
              emerging threats and dynamic scenarios of todays ever changing
              security environment.
            </p>
          </div>
          <div className="lg:w-[30%]] text-white my-5 lg:my-0">
            <h1></h1>
            <ul>
              <li className="text-lg font-medium cursor-pointer my-5">
                <a href="#home">Home</a>
              </li>
              <li className="text-lg font-medium cursor-pointer my-5">
                <a href="#about">About Us</a>
              </li>
              <li className="text-lg font-medium cursor-pointer my-5">
                <a href="#services">Services</a>
              </li>
              <li className="text-lg font-medium cursor-pointer my-5"></li>
            </ul>
          </div>
          <div className="lg:w-[25%] text-white my-5 lg:my-0">
            <h1 className="font-bold text-2xl text-[#FFBA49]">Services</h1>
            <ul>
              <li className="my-5 text-lg ">Sales of Armoured Vehicles</li>
              <li className="my-5 text-lg ">Amoured Vehicle Rental Service</li>
              <li className="my-5 text-lg ">Amoured Vehicle Maintenance</li>
              <li className="my-5 text-lg ">Armouted Vehicle Spare Parts</li>
              <li className="my-5 text-lg ">Armouring of Soft Skin Vehcile</li>
            </ul>
          </div>
          <div className="lg:w-[20%] text-white my-5 lg:my-0">
            <h1 className="font-bold text-2xl text-[#FFBA49]">Contact Us</h1>
            <ul>
              <li className="my-2 text-lg flex items-center gap-3">
                <Call size="25" color="#fff" />

                <p>+234 814 134 6361</p>
              </li>
              <li className="my-2 text-lg flex items-center gap-3">
                <DirectSend size="25" color="#fff" />
                <p>dimkpa@dimkpamotors.com</p>
              </li>
              <li className="my-2 text-lg flex items-center gap-3">
                <Location size="25" color="#fff" />
                <p>Lagos, Nigeria</p>
              </li>
              <div>
                <ul className="flex mt-5">
                  <li className="mr-3 cursor-pointer">
                    <a
                      href="https://www.instagram.com/dimkpa_motors/profilecard/?igsh=MW14aHZ3Mmh4ZjBsdA=="
                      target="_blank"
                    >
                      <Instagram size="25" color="#fff" />
                    </a>
                  </li>
                  <li className="mr-3 cursor-pointer">
                    <a
                      href="https://www.tiktok.com/@dimkpamotors?_r=1&_d=egab46dbbd8c1m&sec_uid=MS4wLjABAAAAurqnaPwocBMELTLvQUAm_GDhIl1kdYuBIAvEMjSy-L922DQ_8R3zOrbkR9_n972W&share_author_id=7004940129823671301&sharer_language=en&source=h5_m&u_code=dkek3l652c6i9i&timestamp=1731100709&user_id=7004940129823671301&sec_user_id=MS4wLjABAAAAurqnaPwocBMELTLvQUAm_GDhIl1kdYuBIAvEMjSy-L922DQ_8R3zOrbkR9_n972W&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7435011355515782967&share_link_id=432b8761-9acc-4680-927a-dcc52d67bbfb&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1"
                      target="_blank"
                    >
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ffffff/ios-glyphs/30/tiktok.png"
                        alt="tiktok"
                      />
                    </a>
                  </li>
                  {/* <li className="mr-3">face</li> */}
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <hr />
        <div className="text-center mt-5 py-5">
          <p>copyrights 2024</p>
        </div>
      </footer>
    </div>
  );
}
