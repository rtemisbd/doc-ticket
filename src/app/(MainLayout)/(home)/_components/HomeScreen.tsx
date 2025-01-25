// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// import img1 from "@/assets/home/home.jpeg";
// import img2 from "@/assets/home/home1.jpeg";
// import img3 from "@/assets/home/home2.jpeg";

// const HomeScreen = () => {
//   return (
//     <div className="py-8 px-2 md:py-12 bg-sky-50 w-full">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 box-border">
//         {/* Right Side (Images First on Small Screens) */}
//         <div className="flex flex-1 justify-center items-center gap-4 order-1 md:order-2">
//           {/* Image 1 */}
//           <div className="relative w-40 h-80 rounded-lg shadow-lg">
//             <Image
//               fill
//               alt="home1"
//               className="rounded-lg object-cover"
//               src={img1}
//             />
//           </div>

//           {/* Image 2 */}
//           <div className="relative w-40 h-80 rounded-lg shadow-lg md:relative md:top-10">
//             <Image
//               fill
//               alt="home2"
//               className="rounded-lg object-cover"
//               src={img2}
//             />
//           </div>

//           {/* Image 3 */}
//           <div className="relative w-40 h-80 rounded-lg shadow-lg">
//             <Image
//               fill
//               alt="home3"
//               className="rounded-lg object-cover"
//               src={img3}
//             />
//           </div>
//         </div>

//         {/* Left Side (Text Content Second on Small Screens) */}
//         <div className="pt-8 pb-8 order-2 md:order-1">
//           <div className="">
//             <h1 className="text-4xl lg:text-5xl">
//               <span className="font-bold">Indulge in luxurious rentals</span>{" "}
//             </h1>
//           </div>

//           <h1 className="text-black max-w-md font-thin text-gray-700 text-4xl pt-4">
//             We Thread your Story
//           </h1>
//           <p className="text-gray-800 pt-2 pb-8 max-w-md text-xl">
//             Countries fastest growing clothing rental brand
//           </p>

//           <div>
//             <Link href="#contact" scroll={true}>
//               <button className="flex items-center px-4 py-2 text-white bg-[#650934] transition duration-300 rounded-md ease-in-out hover:bg-[#650934] hover:scale-105">
//                 Make An Appointment
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;
