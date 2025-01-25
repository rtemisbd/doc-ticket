// "use client";

// import { useUser } from "@/context/user.provider";
// import { useUserLogin } from "@/hooks/auth";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

// // Define the form data type
// interface ILoginForm {
//   adminId: string;
//   password: string;
// }

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ILoginForm>({
//     defaultValues: {
//       adminId: "A-", // Default value for adminId
//       password: "", // Default value for password
//     },
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
//   const { setIsLoading: userLoading } = useUser();

//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("redirect");
//   const router = useRouter();

//   const onSubmit: SubmitHandler<ILoginForm> = (data) => {
//     const userData = {
//       id: data.adminId,
//       password: data.password,
//     };

//     handleUserLogin(userData);
//   };

//   useEffect(() => {
     
//     if (!isPending && isSuccess) {
//       if (redirect) {
//         router.push(redirect);
//       } else {
        
//         router.push("/admin");
//         userLoading(true)
//         // window.location.reload();
//       }
//     }
//   }, [isPending, isSuccess, redirect, router]);   

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-950 via--800 to-slate-950">
//       {/* Top-Left Circle */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl" />

//       {/* Bottom-Right Circle */}
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-20 rounded-full blur-2xl" />

//       {/* Glassmorphic Form */}
//       <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white border-opacity-40">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Admin ID Field */}
//           <div className="py-2 space-y-1">
//             <label htmlFor="adminId" className="text-white">
//               Admin ID
//             </label>
//             <input
//               id="adminId"
//               type="text"
//               {...register("adminId", { required: "Admin ID is required" })}
//               className="w-full bg-white bg-opacity-20 capitalize text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#650934]"
//               placeholder="Enter your Admin ID"
//             />
//             {errors.adminId && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.adminId.message as string}
//               </p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="space-y-1">
//             <label htmlFor="password" className="text-white">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 {...register("password", { required: "Password is required" })}
//                 className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#650934]"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2 text-white focus:outline-none"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.password.message as string}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#650934] text-white px-4 py-2 rounded-lg hover:bg-[#650934bd] transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
