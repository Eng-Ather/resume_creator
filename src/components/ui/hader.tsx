// // components/Header.tsx

// // import { Button } from "./Button";
// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//     return (
//         <div
//             className="w-full p-4 text-white text-center"
//             style={{ backgroundColor: "var(--primary-color)" }} // You can also define this in Tailwind config
//         >
//             <ul className="flex justify-between items-center space-x-8">
//                 <li className="flex items-center gap-3">
//                     <Image
//                         src="https://cdn-icons-png.flaticon.com/512/2788/2788002.png"
//                         alt="Resume Generator Logo"
//                         width={40}
//                         height={50}
//                         priority
//                     />
//                     <h1 className="text-xl font-semibold">Resume Generator</h1>
//                 </li>

//                 <li className="flex gap-8 text-lg font-medium">
//                     <Link href="./about" className="hover:text-blue-400 transition duration-300">
//                         About Us
//                     </Link>
//                     <Link href="/" className="hover:text-blue-400 transition duration-300">
//                         Home
//                     </Link>
//                 </li>
//             </ul>

//             {/* Uncomment this line if you want to use the Button component */}
//             {/* <Button variant="outline" className="bg-blue-700">Edit</Button> */}
//         </div>
//     );
// };

// export default Header;
