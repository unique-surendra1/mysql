import "./Image.css";

const Image = ({ image }) => {
  return (
    <div className="w-full h-full bg-gray-500 rounded-2xl border-gray-700 ">
      <div className=" imgslide overflow-hidden p-5 bg-white rounded-2xl  ">
        <img
          src={image}
          alt="img"
          className="  min-h-[300px] max-h-[400px] bg-center bg-cover rounded-xl w-[100%] h-[100%] shadow-xl  hover:scale-110 duration-500 "
        />
      </div>
    </div>
  );
};

export default Image;
