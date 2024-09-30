// import React from "react";
// import Image from "next/image";

// interface ImageDetailProps {
//   image: string | null;
//   handleClose: () => void;
// }

// const ImageDetail: React.FC<ImageDetailProps> = ({ image, handleClose }) => {
//   if (!image) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-60">
//       <div
//         className="relative flex flex-col justify-center items-center gap-10 p-10 h-5/6 w-5/6 max-w-5xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="bg-white p-1 relative w-full h-full">
//           <Image
//             src={image}
//             alt="Detail Image"
//             layout="fill"
//             objectFit="contain"
//             className="rounded-lg"
//           />
//         </div>
//         <button
//           onClick={handleClose}
//           className="w-1/3 text-white bg-gray-800 rounded-full p-2"
//         >
//           닫기
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageDetail;

import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa"; // 닫기 아이콘 추가

interface ImageDetailProps {
  image: string | null;
  handleClose: () => void;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ image, handleClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-60">
      <div
        className="relative flex flex-col justify-center items-center bg-white p-6 h-5/6 w-5/6 max-w-4xl rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-500 bg-transparent rounded-full p-2 transition duration-200 z-50"
          aria-label="Close"
        >
          <FaTimes size={24} />
        </button>

        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Detail Image"
            layout="fill"
            objectFit="contain"
            className="relative rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
