import "./imageAndText.css";
import Image from "./Image/Image";
import Text from "./Text/Text";
import img1 from "/crypto/cryptopic1.jpg";
import img2 from "/crypto/cryptopic2.jpg";
import img3 from "/crypto/cryptopic3.jpg";
import img4 from "/crypto/cryptopic4.jpg";
import img5 from "/crypto/cryptopic5.jpg";
const ImageAndText = () => {
  return (
    <div className="rounded-2xl my-6 py-20 bg-gray-200  mb-60 ">
      <section className="mt-4  py-20 justify-center  flex w-[90%] m-auto flex-col md:flex-row gap-8 bg-white p-5  border border-gray-300 rounded-3xl my-20 shadow-2xl ">
        <Text
          heading="Heading1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et, non,
      voluptas aliquam odio quam voluptates quis velit dolorem delectus eum
      totam nihil qui soluta. Repudiandae ratione voluptatum quibusdam placeat?"
        />
        <Image image={img1} />
      </section>
      <section className="mt-4  py-20 justify-center  flex w-[90%] m-auto flex-col md:flex-row gap-8 bg-white p-5  border border-gray-300 rounded-3xl my-20 shadow-2xl ">
        <Image image={img2} />
        <Text
          heading="Heading1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et, non,
      voluptas aliquam odio quam voluptates quis velit dolorem delectus eum
      totam nihil qui soluta. Repudiandae ratione voluptatum quibusdam placeat?"
        />
      </section>
      <section className="mt-4  py-20 justify-center  flex w-[90%] m-auto flex-col md:flex-row gap-8 bg-white p-5  border border-gray-300 rounded-3xl my-20 shadow-2xl ">
        <Text
          heading="Heading1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et, non,
      voluptas aliquam odio quam voluptates quis velit dolorem delectus eum
      totam nihil qui soluta. Repudiandae ratione voluptatum quibusdam placeat?"
        />
        <Image image={img3} />
      </section>
      <section className="mt-4  py-20 justify-center  flex w-[90%] m-auto flex-col md:flex-row gap-8 bg-white p-5  border border-gray-300 rounded-3xl my-20 shadow-2xl ">
        <Image image={img4} />

        <Text
          heading="Heading1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et, non,
      voluptas aliquam odio quam voluptates quis velit dolorem delectus eum
      totam nihil qui soluta. Repudiandae ratione voluptatum quibusdam placeat?"
        />
      </section>
      <section className="mt-4  py-20 justify-center  flex w-[90%] m-auto flex-col md:flex-row gap-8 bg-white p-5  border border-gray-300 rounded-3xl my-20 shadow-2xl ">
        <Text
          heading="Heading1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et, non,
      voluptas aliquam odio quam voluptates quis velit dolorem delectus eum
      totam nihil qui soluta. Repudiandae ratione voluptatum quibusdam placeat?"
        />
        <Image image={img5} />
      </section>
    </div>
  );
};

export default ImageAndText;
