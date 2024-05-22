// import Menu from "../components/menu";
// import FrameComponent1 from "../components/frame-component1";
// import SummaryContainer from "../components/summary-container";
// import { useState } from "react";

// const Dashboard = () => {
//   const [image, setImage] = useState();

//   return (
//     <div className="w-full relative bg-linen overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq900:pl-5 mq900:pr-5 mq900:box-border">
//       <Menu />
//       <FrameComponent1 uploadedImage={image} />
//       <section className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-[calc(100%_-_260px)] mq900:max-w-full">
//         <SummaryContainer setImage={(image) => setImage(image)} />
//       </section>
//     </div>
//   );
// };

// export default Dashboard;

import Menu from "../components/menu";
import FrameComponent1 from "../components/frame-component1";
import SummaryContainer from "../components/summary-container";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [image, setImage] = useState();
  const [serverResponse, setServerResponse] = useState("");

  
  return (
    <div className="w-full relative bg-linen overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq900:pl-5 mq900:pr-5 mq900:box-border">
      <Menu />
      <FrameComponent1 uploadedImage={image} />
      <section className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-[calc(100%_-_260px)] mq900:max-w-full">
        <SummaryContainer serverResponse={serverResponse} setServerResponse={setServerResponse} setImage={(image) => setImage(image)} />
      </section>
    </div>
  );
};

export default Dashboard;

