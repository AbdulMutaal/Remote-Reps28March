import Buttons from "../buttons/Buttons";

function Hero() {
  return (
    <div className="w-full flex items-center bg-[#f5f5f5] py-[100px] justify-center p-[10px] md:pl-[40px]">
      <div className="w-full flex flex-col md:flex-row items-center bg-[#f5f5f5] justify-center max-w-[1400px]">
        <div className="w-full md:w-1/2">
          <div className="flex gap-[20px] mb-[50px]">
            <button className="w-fit rounded-[100px] bg-[#d0bceb] text-[#4c00b0] text-[12px] font-semibold px-[10px] py-[2px] leading-[19px]">
              What's new
            </button>
            <button className="w-fit rounded-[100px] bg-[#f4f4f4] text-[#a6a2a2] text-[12px] font-semibold px-[10px] py-[2px] leading-[19px] ">
              Just shipped v1.0.1
            </button>
          </div>

          <div className="text-black leading-[60px] text-[46px] font-bold mb-[20px]">
            Supercharge your
            <br /> web applications
          </div>

          <div className="text-[#a6a2a2] font-normal mb-[30px]">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commondo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </div>

          <div className="flex gap-[20px] flex-col md:flex-row items-center">
            <Buttons text="Documentation" size="sm" />
            <div className="hover:underline cursor-pointer font-medium leading-[20px]">
              View on GitHub {"->"}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-t-[5px] md:border-t-[50px] border-l-[5px] md:border-l-[50px] border-[#4c00b0] rounded-[5px] md:rounded-[20px]">
          <img src="/hero/heroImage.PNG" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
