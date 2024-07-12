// import React from 'react'

import Navbar from "../components/Navbar";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center" >
      
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {children}
//       </main>
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//         </div>
//       </footer>
//         {children}</div>
//   )
// }

// export default Layout



const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          © 2024 Video Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
