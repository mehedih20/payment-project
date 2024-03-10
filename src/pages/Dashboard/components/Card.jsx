import MinCard from "./MinCard";

const Card = ({ modalHandler, setHeading, setLogo }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 p-5 mt-10 ml-8 bg-gray-100 border-transparent shadow-xl rounded-xl">
      <div
        onClick={() => {
          modalHandler();
          setHeading("Add Money");
          setLogo(1);
        }}
      >
        <MinCard text={"Add Money"} cardNo={1} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Send Money");
          setLogo(2);
        }}
      >
        <MinCard text={"Send Money"} cardNo={2} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Pay Bill");
          setLogo(3);
        }}
      >
        <MinCard text={"Pay Bill"} cardNo={3} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Invest");
          setLogo(4);
        }}
      >
        <MinCard text={"Invest"} cardNo={4} />
      </div>
    </div>
  );
};

export default Card;
