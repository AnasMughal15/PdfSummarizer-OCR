// import FrameComponent2 from "./frame-component2";

// const FrameComponent1 = () => {

//   return (
//     <section className="w-[1120px] !m-[0] absolute right-[30px] bottom-[165px] rounded-sm bg-gray-800 flex flex-row items-start justify-start pt-[18px] px-[19px] pb-[23px] box-border gap-[14px] max-w-full text-left text-sm text-gray-400 font-poppins mq900:flex-wrap">
//       <div className="h-[347px] flex-1 relative min-w-[349px] max-w-full mq450:min-w-full mq900:flex-1">
//         <div className="absolute top-[22px] left-[110px] w-[100px] h-[100px] overflow-hidden hidden" />
//         <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 w-full h-full z-[1]" />
//       </div>
//       <FrameComponent2 textInImage="Text in image" />

//     </section>
//   );
// };

// export default FrameComponent1;

import FrameComponent2 from "./frame-component2";
import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const FrameComponent1 = ({ textInImage, uploadedImage, }) => {
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    console.log(231, uploadedImage);
    if (uploadedImage) {
      const recognizeText = async () => {
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const { data } = await worker.recognize(uploadedImage);
        setRecognizedText(data.text);
        await worker.terminate();
      };
      recognizeText();
    }
  }, [uploadedImage]);

  return (
    <section className="w-[1120px] !m-[0] absolute right-[30px] bottom-[165px] rounded-sm bg-gray-800 flex flex-row items-start justify-start pt-[18px] px-[19px] pb-[23px] box-border gap-[14px] max-w-full text-left text-sm text-gray-400 font-poppins mq900:flex-wrap">
      <div className="h-[347px] flex-1 relative min-w-[349px] max-w-full mq450:min-w-full mq900:flex-1">
        <div className="absolute top-[22px] left-[110px] w-[100px] h-[100px] overflow-hidden hidden" />
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 w-full h-full z-[1]" />
      </div>

      <div
      className="flex-[0.9434] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-700 flex flex-col items-start justify-start pt-4 px-[15px] pb-[216px] box-border min-w-[344px] max-w-full z-[1] text-left text-sm text-gray-400 font-poppins mq450:min-w-full mq900:flex-1"
    >
      <div
        className="relative tracking-[0.01em] font-medium inline-block [-webkit-text-stroke:0.5px_#060606] min-w-[97px] z-[2]"
        // style={{ minWidth: propMinWidth }}
      >
        {"textInImage"}
      </div>
      {recognizedText && (
        <div className="text-gray-100 mt-4">
          {recognizedText}
        </div>
      )}
    </div>
    </section>
  );
};

export default FrameComponent1;
