const Menu = () => {
  return (
    <div className="w-[260px] bg-gray-400 flex flex-col items-start justify-start pt-[34px] px-[30px] pb-[30px] box-border relative gap-[243px] text-left text-sm text-gray-300 font-poppins mq450:pt-5 mq450:box-border mq900:hidden mq900:pt-[22px] mq900:pb-5 mq900:box-border">
      <div className="w-[30px] h-[30px] !m-[0] absolute top-[30px] right-[-15px] shadow-[2px_2px_8px_rgba(0,_0,_0,_0.1)] rounded-mid bg-white flex flex-row items-start justify-start p-2 box-border">
        <img
          className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icons.svg"
        />
      </div>
      <div className="w-[184px] flex flex-col items-start justify-start gap-[59px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[41.6px]">
          <div className="flex flex-row items-start justify-start py-0 px-[7px]">
            <img
              className="h-[64.4px] w-[136px] relative object-cover"
              loading="lazy"
              alt=""
              src="/red-white-simple-company-technology-logo-1-1@2x.png"
            />
          </div>
          <div className="self-stretch rounded-3xl bg-white flex flex-row items-start justify-start py-[3px] px-[7px] gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-[34px] h-[34px] rounded-3xl bg-crimson flex flex-row items-center justify-center p-[5px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icons-1.svg"
                />
              </div>
            </div>
            <div className="relative font-medium">
              <p className="m-0">{`Create new `}</p>
              <p className="m-0">project</p>
            </div>
          </div>
        </div>
        <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-sm text-whitesmoke-200 font-poppins">
          <button className="cursor-pointer [border:none] py-[13px] px-4 bg-white self-stretch rounded-3xl flex flex-row items-start justify-start gap-[16px] hover:bg-gainsboro">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              alt=""
              src="/icons-2.svg"
            />
            <div className="relative text-sm font-medium font-poppins text-crimson text-left inline-block min-w-[79px]">
              Dashboard
            </div>
          </button>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-3.svg"
            />
            <div className="relative font-medium inline-block min-w-[57px]">
              Projects
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-4.svg"
            />
            <div className="relative font-medium inline-block min-w-[41px]">
              Tasks
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-5.svg"
            />
            <div className="relative font-medium inline-block min-w-[79px]">
              Dashboard
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-6.svg"
            />
            <div className="relative font-medium inline-block min-w-[61px]">
              Time log
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px] shrink-0"
              loading="lazy"
              alt=""
              src="/icons-7.svg"
            />
            <div className="relative font-medium inline-block min-w-[108px] shrink-0">
              Resource mgnt
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-8.svg"
            />
            <div className="relative font-medium inline-block min-w-[39px]">
              Users
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-[13px] px-4 box-border relative gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative"
              loading="lazy"
              alt=""
              src="/icons-9.svg"
            />
            <div className="absolute !m-[0] top-[calc(50%_-_10.5px)] right-[-12px] font-medium inline-block min-w-[118px]">
              Project template
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[13px] px-4 gap-[16px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/icons-10.svg"
            />
            <div className="relative font-medium inline-block min-w-[100px]">
              Menu settings
            </div>
          </div>
        </nav>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-[9px] bg-crimson w-12 h-12 shadow-[0px_8px_15px_rgba(19,_15,_57,_0.12)] rounded-29xl flex flex-row items-center justify-center box-border z-[1]">
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
          alt=""
          src="/icons-11.svg"
        />
      </button>
    </div>
  );
};

export default Menu;
