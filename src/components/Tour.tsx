import { useState } from "react";

export default function Tour () {

   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <section className="py-8 lg:py-24 px-0 bg-[#010b15]" id="tour">
            <div className="">
               <div className="md:flex justify-center">
                  <div data-aos-delay={70} className="block shrink grow basis-0 p-2 text-center">
                     <h2 className="font-medium text-xl text-cyan-ak lg:text-2xl md:mb-8 mb-5 after:w-14 after:h-1 after:mx-auto after:mt-3 after:bg-cyan-ak after:block after:rounded">
                        Recorrido virtual 360°
                     </h2>
                  </div>
               </div>
               <div className="md:flex justify-center">
                  <div className="block shrink grow basis-0 text-center p-0 bg-360 bg-center bg-cover bg-no-repeat bg-fixed md:w-3/4 h-[calc(40vh)] lg:h-[calc(60vh)] xl:h-[calc(65vh)] relative">

                     <div className="absolute inset-0 flex items-center justify-center">
                        <a
                           data-target="embed-360"
                           id="button-360"
                           className="block cursor-pointer w-20 md:w-24 mx-auto js-modal-trigger"
                           onClick={() => { setShowModal(true) }}
                        >
                           <svg
                              className="w-full svg-play"
                              id="play"
                              viewBox="0 0 163 163"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                           >
                              <g fill="none">
                                 <g transform="translate(2.000000, 2.000000)" strokeWidth={4}>
                                    <path
                                       d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                                       id="lineOne"
                                       stroke="#062e51"
                                    />
                                    <path
                                       d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                                       id="triangle"
                                       stroke="#2ee5d8"
                                    />
                                    <path
                                       d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                                       id="lineTwo"
                                       stroke="#062e51"
                                    />
                                 </g>
                              </g>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="relative">
            <div className={`flex justify-center left-0 top-full w-full h-full fixed opacity-0 z-50 transition-[top,opacity] duration-300 ${showModal ? '!top-0 opacity-100' : ''}`}>
               <iframe
                  src="https://ayllukaypi.pe/files/360/villa-los-parques"
                  className="absolute w-full h-full top-0 left-0" 
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen

               >
               </iframe>

               <div className="absolute bottom-5 w-3/4">
                  <button
                     className="text-white text-base md:w-auto md:first:mb-0 bg-azul rounded-lg px-4 py-1.5 text-center font-bold shadow-lg transition-transform duration-200 hover:scale-105 first:mb-3 flex items-center justify-center w-full z-50"
                     id="close-360"
                     aria-label="close"
                     onClick={() => setShowModal(false)}
                  >
                     Volver
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                     </svg>
                  </button>

               </div>

            </div>
         </div>

         {/* <div className={`items-center flex-col justify-center overflow-hidden fixed z-50 flex inset-0 transition`} id="embed-360">
            <div className={`bg-[rgba(10,10,10)]/80 absolute inset-0`}></div>

            <div className="modal-content-360 h-full left-0 fixed top-0 w-full z-[500]">

               <iframe
                  src="https://ayllukaypi.pe/files/360/villa-los-parques"
                  // className="min-h-screen" 
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen

               >
               </iframe>

            </div>

            <div className="absolute bottom-5 z-[500] w-3/4">
               <button
                  className="text-white text-base uppercase md:w-auto md:first:mb-0 bg-azul rounded-lg px-4 py-1.5 text-center font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3 flex items-center justify-center w-full "
                  id="close-360"
                  aria-label="close"
                  onClick={() => setShowModal(false)}
               >
                  Volver
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
               </button>

            </div>

         </div> */}
      </>

   )
}
