import Buttons from "./Buttons";

function ButtonSection() {
  return (
    <div className="flex gap-[50px] px-[20px] flex-wrap mb-[100px]">
      <Buttons text="Button text" size="sm" />
      <Buttons text="Button text" size="normal" />
      <Buttons text="Button text" />
      <Buttons text="Button text" size="md" />
      <Buttons text="Button text" size="lg" />
    </div>
  );
}

export default ButtonSection;
