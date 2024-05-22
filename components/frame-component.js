const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-left text-13xl text-gray-500 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-start [row-gap:20px] max-w-full">
          <h1 className="m-0 w-[521px] relative text-inherit tracking-[0.01em] font-medium font-inherit flex items-center shrink-0 [-webkit-text-stroke:0.5px_#060606] max-w-full mq450:text-lgi mq900:text-7xl">
            Tools
          </h1>
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[389px] max-w-full text-sm text-darkslategray-100 mq700:flex-wrap mq700:min-w-full">
            <div className="flex-1 shadow-[0px_4px_6px_rgba(0,_0,_0,_0.02)] rounded-36xl bg-white flex flex-col items-start justify-center py-[13px] pr-2.5 pl-[13px] box-border min-w-[210px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-[14px]">
                <img
                  className="h-[22px] w-[22px] relative min-h-[22px]"
                  alt=""
                  src="/icons-12.svg"
                />
                <input
                  className="w-[calc(100%_-_22px)] [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] h-[21px] flex-1 relative text-gray-600 text-left inline-block min-w-[158px] p-0"
                  placeholder="Search for anything..."
                  type="text"
                />
              </div>
            </div>
            <div className="h-12 w-12 shadow-[0px_4px_6px_rgba(0,_0,_0,_0.02)] rounded-36xl bg-white flex flex-col items-start justify-center p-[13px] box-border">
              <div className="flex flex-row items-center justify-start">
                <img
                  className="h-[22px] w-[22px] relative"
                  loading="lazy"
                  alt=""
                  src="/icons-13.svg"
                />
              </div>
            </div>
            <div className="h-[53px] rounded-3xl bg-white flex flex-row items-center justify-start py-[5px] pr-5 pl-[5px] box-border gap-[10px]">
              <div className="h-[38px] w-[38px] relative rounded-[50%] flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.316)]"
                  alt=""
                  src="/ellipse-3226@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[14px]">
                <div className="flex flex-col items-start justify-center gap-[4px]">
                  <div className="relative font-medium inline-block min-w-[82px]">
                    Dani Bundu
                  </div>
                  <div className="relative text-xs font-medium text-darkslategray-200 inline-block min-w-[107px]">
                    Prodcut manager
                  </div>
                </div>
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/icons-14@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-914.svg"
      />
    </div>
  );
};

export default FrameComponent;
