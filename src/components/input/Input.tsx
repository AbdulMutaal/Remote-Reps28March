function Input() {
  return (
    <div className="mb-[100px] px-[20px]">
      <div className="font-medium text-[20px] mb-[10px]">Email</div>

      <input
        className="border rounded-[5px] px-[10px] py-[10px] w-1/2 outline-none"
        placeholder="you@example.com"
      />
      <div className="text-[#a6a2a2] font-normal mb-[30px] mt-[5px]">
        We{"'"}ll only use this for spam
      </div>
    </div>
  );
}

export default Input;
