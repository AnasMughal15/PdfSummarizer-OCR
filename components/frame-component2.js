// import { useMemo } from "react";

// const FrameComponent2 = ({ textInImage, propFlex, propMinWidth }) => {
//   const imageReferenceStyle = useMemo(() => {
//     return {
//       flex: propFlex,
//     };
//   }, [propFlex]);

//   const textInImageStyle = useMemo(() => {
//     return {
//       minWidth: propMinWidth,
//     };
//   }, [propMinWidth]);

//   return (
//     <div
//       className="flex-[0.9434] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 px-[15px] pb-[216px] box-border min-w-[344px] max-w-full z-[1] text-left text-sm text-gray-400 font-poppins mq450:min-w-full mq900:flex-1"
//       style={imageReferenceStyle}
//     >
//       <div className="w-[530px] h-[347px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 hidden max-w-full" />
//       <div
//         className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[97px] z-[2]"
//         style={textInImageStyle}
//       >
//         {textInImage}
//       </div>
//       <div className="w-[487px] h-[94px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-gray-100">
//         <div className="mt-[-6px] flex-1 relative leading-[20px] font-medium inline-block max-w-full z-[3]">
//             "here i want to get server response"
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent2;


// // import { useMemo, useEffect, useState } from "react";
// // import { createWorker } from "tesseract.js";

// // const FrameComponent2 = ({ textInImage, propFlex, propMinWidth, uploadedImage }) => {
// //   const [recognizedText, setRecognizedText] = useState("");
  
//   // useEffect(() => {
//   //   if (uploadedImage) {
//   //     const recognizeText = async () => {
//   //       const worker = createWorker();
//   //       await worker.load();
//   //       await worker.loadLanguage("eng");
//   //       await worker.initialize("eng");
//   //       const { data } = await worker.recognize(uploadedImage);
//   //       setRecognizedText(data.text);
//   //       await worker.terminate();
//   //     };
//   //     recognizeText();
//   //   }
//   // }, [uploadedImage]);

// //   return (
// //     <div
// //       className="flex-[0.9434] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 px-[15px] pb-[216px] box-border min-w-[344px] max-w-full z-[1] text-left text-sm text-gray-400 font-poppins mq450:min-w-full mq900:flex-1"
// //     >
// //       <div
// //         className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[97px] z-[2]"
// //         style={{ minWidth: propMinWidth }}
// //       >
// //         {textInImage}
// //       </div>
// //       {recognizedText && (
// //         <div className="text-gray-100 mt-4">
// //           {recognizedText}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FrameComponent2;

// // import { useMemo } from "react";

// // const FrameComponent2 = ({ textInImage, propFlex, propMinWidth, customText }) => {
// //   const imageReferenceStyle = useMemo(() => {
// //     return {
// //       flex: propFlex,
// //     };
// //   }, [propFlex]);

// //   const textInImageStyle = useMemo(() => {
// //     return {
// //       minWidth: propMinWidth,
// //     };
// //   }, [propMinWidth]);

// //   return (
// //     <div
// //       className="flex-[0.9434] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 px-[15px] pb-[216px] box-border min-w-[344px] max-w-full z-[1] text-left text-sm text-gray-400 font-poppins mq450:min-w-full mq900:flex-1"
// //       style={imageReferenceStyle}
// //     >
// //       <div className="w-[530px] h-[347px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 hidden max-w-full" />
// //       <div
// //         className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[97px] z-[2]"
// //         style={textInImageStyle}
// //       >
// //         {textInImage}
// //       </div>
// //       <div className="w-[487px] h-[94px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-gray-100">
// //         <div className="mt-[-6px] flex-1 relative leading-[20px] font-medium inline-block max-w-full z-[3]">
// //           {customText}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FrameComponent2;
import { useState, useEffect } from "react";

const FrameComponent2 = ({ textInImage, propFlex, propMinWidth,serverResponse }) => {

  return (
    <div className="flex-[0.9434] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 px-[15px] pb-[216px] box-border min-w-[344px] max-w-full z-[1] text-left text-sm text-gray-400 font-poppins mq450:min-w-full mq900:flex-1">
      <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[97px] z-[2]">
        {textInImage}
      </div>
      <div className="w-[487px] h-[94px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-gray-100">
        <div className="mt-[-6px] flex-1 relative leading-[20px] font-medium inline-block max-w-full z-[3]">
          {serverResponse}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;

