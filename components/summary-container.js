// import FrameComponent from "./frame-component";
// import FrameComponent2 from "./frame-component2";

// const SummaryContainer = () => {
//   return (
//     <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-500 font-poppins mq700:gap-[16px]">
//       <FrameComponent />
//       <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[89px] box-border max-w-full text-sm text-gray-400 mq700:pb-[58px] mq700:box-border">
//         <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq700:gap-[23px]">
//           <div className="self-stretch rounded-sm bg-gray-800 flex flex-row flex-wrap items-start justify-start pt-[18px] px-[19px] pb-[23px] box-border gap-[14px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
//             <div className="flex-1 shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 pb-3.5 pr-[14.5px] pl-[18px] box-border gap-[10.5px] min-w-[349px] max-w-full z-[1] mq700:min-w-full">
//               <div className="w-[537px] h-[347px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 hidden max-w-full" />
//               <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[30px] z-[2]">
//                 Text
//               </div>
//               <textarea
//                 className="bg-whitesmoke-100 h-[243px] w-auto [outline:none] self-stretch shadow-[0px_1px_0px_rgba(208,_215,_222,_0.2)_inset] rounded-md box-border flex flex-row items-start justify-start py-[9px] px-[13px] font-noto-sans text-sm text-gray-200 z-[2] border-[1px] border-solid border-lightgray"
//                 placeholder="Peter Griffin"
//                 rows={12}
//                 cols={25}
//               />
//               <div className="self-stretch flex flex-row items-start justify-end">
//                 <button className="cursor-pointer py-1 pr-2.5 pl-3 bg-mediumseagreen-200 w-[100.5px] shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md box-border flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
//                   <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[76px]">
//                     Summarize
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <FrameComponent2
//               textInImage="Summary"
//               propFlex="1"
//               propMinWidth="71px"
//             />
//           </div>
//           <div className="flex flex-row items-start justify-start py-0 px-[37px]">
//             <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[47px] z-[2]">
//               Image
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-[638.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
//         <button className="cursor-pointer py-1 pr-3 pl-3.5 bg-mediumseagreen-200 shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
//           <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[110px] whitespace-nowrap">
//             Upload an Image
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SummaryContainer;


// import { useState } from 'react';
// import FrameComponent from "./frame-component";
// import FrameComponent2 from "./frame-component2";

// const SummaryContainer = ({setImage}) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadSuccess, setUploadSuccess] = useState(false);

//   const handleChangeImage = (e) => {
//     setSelectedImage(e.target.files[0]);
//     setImage(e.target.files[0])
//     setUploadSuccess(true);
//   };

//   return (
//     <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-500 font-poppins mq700:gap-[16px]">
//       <FrameComponent />
//       <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[89px] box-border max-w-full text-sm text-gray-400 mq700:pb-[58px] mq700:box-border">
//         <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq700:gap-[23px]">
//           <div className="self-stretch rounded-sm bg-gray-800 flex flex-row flex-wrap items-start justify-start pt-[18px] px-[19px] pb-[23px] box-border gap-[14px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
//             <div className="flex-1 shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 pb-3.5 pr-[14.5px] pl-[18px] box-border gap-[10.5px] min-w-[349px] max-w-full z-[1] mq700:min-w-full">
//               <div className="w-[537px] h-[347px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 hidden max-w-full" />
//               <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[30px] z-[2]">
//                 Text
//               </div>
//               <textarea
//                 className="bg-whitesmoke-100 h-[243px] w-auto [outline:none] self-stretch shadow-[0px_1px_0px_rgba(208,_215,_222,_0.2)_inset] rounded-md box-border flex flex-row items-start justify-start py-[9px] px-[13px] font-noto-sans text-sm text-gray-200 z-[2] border-[1px] border-solid border-lightgray"
//                 placeholder="Peter Griffin"
//                 rows={12}
//                 cols={25}
//               />
//               <div className="self-stretch flex flex-row items-start justify-end">
//                 <button className="cursor-pointer py-1 pr-2.5 pl-3 bg-mediumseagreen-200 w-[100.5px] shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md box-border flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
//                   <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[76px]">
//                     Summarize
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <FrameComponent2
//               textInImage="Summary"
//               propFlex="1"
//               propMinWidth="71px"
//               uploadedImage={selectedImage}
//             />
//           </div>
//           <div className="flex flex-row items-start justify-start py-0 px-[37px]">
//             <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[47px] z-[2]">
//               Image
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-[638.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
//         <label htmlFor="imageUpload" className="cursor-pointer py-1 pr-3 pl-3.5 bg-mediumseagreen-200 shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
//           <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[110px] whitespace-nowrap">
//             {uploadSuccess ? "Image Uploaded Successfully" : "Upload an Image"}
//           </div>
//           <input
//             type="file"
//             id="imageUpload"
//             accept="image/*"
//             className="hidden"
//             onChange={handleChangeImage}
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default SummaryContainer;

import { useState } from 'react';
import FrameComponent from "./frame-component";
import FrameComponent2 from "./frame-component2";

const SummaryContainer = ({setImage,setServerResponse,serverResponse}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleChangeImage = (e) => {
    setSelectedImage(e.target.files[0]);
    setImage(e.target.files[0])
    setUploadSuccess(true);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const summarizeText = () => {
    fetch('http://localhost:8000/api/summarize_text/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setServerResponse(data.summary)// Log the response data from the API
      // You can update state or do other operations with the response data here
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-13xl text-gray-500 font-poppins mq700:gap-[16px]">
      <FrameComponent />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[89px] box-border max-w-full text-sm text-gray-400 mq700:pb-[58px] mq700:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq700:gap-[23px]">
          <div className="self-stretch rounded-sm bg-gray-800 flex flex-row flex-wrap items-start justify-start pt-[18px] px-[19px] pb-[23px] box-border gap-[14px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="flex-1 shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 pb-3.5 pr-[14.5px] pl-[18px] box-border gap-[10.5px] min-w-[349px] max-w-full z-[1] mq700:min-w-full">
              <div className="w-[537px] h-[347px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 hidden max-w-full" />
              <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[30px] z-[2]">
                Text
              </div>
              <textarea
                className="bg-whitesmoke-100 h-[243px] w-auto [outline:none] self-stretch shadow-[0px_1px_0px_rgba(208,_215,_222,_0.2)_inset] rounded-md box-border flex flex-row items-start justify-start py-[9px] px-[13px] font-noto-sans text-sm text-gray-200 z-[2] border-[1px] border-solid border-lightgray"
                placeholder="Peter Griffin"
                value={text}  // Bind the value of the textarea to the 'text' state
                onChange={handleChangeText} // Add onChange handler to capture text changes
                rows={12}
                cols={25}
              />
              <div className="self-stretch flex flex-row items-start justify-end">
                <button className="cursor-pointer py-1 pr-2.5 pl-3 bg-mediumseagreen-200 w-[100.5px] shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md box-border flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray" onClick={summarizeText}>
                  <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[76px]">
                    Summarize
                  </div>
                </button>
              </div>
            </div>
            <FrameComponent2
              textInImage="Summary"
              propFlex="1"
              propMinWidth="71px"
              uploadedImage={selectedImage}
              serverResponse={serverResponse}
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[37px]">
            <div className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[47px] z-[2]">
              Image
            </div>
          </div>
        </div>
      </div>
      <div className="w-[638.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <label htmlFor="imageUpload" className="cursor-pointer py-1 pr-3 pl-3.5 bg-mediumseagreen-200 shadow-[0px_1px_0px_rgba(27,_31,_36,_0.1),_0px_1px_0px_rgba(255,_255,_255,_0.03)_inset] rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gray-900 hover:bg-mediumseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
          <div className="relative text-sm leading-[20px] font-medium font-noto-sans text-white text-center inline-block min-w-[110px] whitespace-nowrap">
            {uploadSuccess ? "Image Uploaded Successfully" : "Upload an Image"}
          </div>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleChangeImage}
          />
        </label>
      </div>
    </div>
  );
};

export default SummaryContainer;







