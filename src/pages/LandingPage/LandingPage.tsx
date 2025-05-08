import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import React from "react";

const LandingPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  const handleClick = () => {
    if (isLoggedIn) {
      router.push("/wiki");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <section
        id="write"
        className="text-center pt-14 relative min-h-[700px] pb-[150px]"
        style={{
          background: "#F1F4FD",
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            background: "#454D66",
            height: "1050px",
            borderTopLeftRadius: "50% 20%",
            borderTopRightRadius: "50% 20%",
            zIndex: 1,
          }}
        ></div>

        <h1 className="text-[#474D66] text-6xl font-thin">남들이 만드는</h1>
        <p className="text-[#474D66] text-[90px] font-bold mb-4">나만의 위키</p>
        <button
          onClick={handleClick}
          className="bg-[#474D66] text-white py-2.5 px-6 rounded-lg hover:bg-[#3B4356] transition"
        >
          위키 만들기
        </button>

        <img
          src="/assets/images/type=image1.png"
          alt="Image description"
          className="mt-12 mx-auto max-w-[450px] h-auto"
          style={{ position: "relative", zIndex: 2 }}
        />

        <div
          className="hidden md:block absolute top-[1030px] left-[60px] md:left-[460px] text-left"
          style={{ zIndex: 2 }}
        >
          <div className="text-xl font-bold" style={{ color: "#4CBFA4" }}>
            WRITE
          </div>
          <div
            className="text-4xl font-light mt-8"
            style={{ color: "#FFFFFF" }}
          >
            친구의 위키,
            <br />
            직접 작성해 봐요
          </div>
        </div>

        <div
          className="md:hidden px-4 sm:px-6 text-left mt-28"
          style={{ zIndex: 2, position: "relative", left: "18%" }}
        >
          <div className="text-lg font-bold" style={{ color: "#4CBFA4" }}>
            WRITE
          </div>
          <div
            className="text-2xl font-light mt-2"
            style={{ color: "#FFFFFF" }}
          >
            친구의 위키,
            <br />
            직접 작성해 봐요
          </div>
        </div>

        <div className="flex justify-center items-start gap-[4vw] sm:gap-[4vw] md:gap-[2vw] lg:gap-[20px] relative z-10 px-4 sm:px-6 md:px-12">
          <div className="bg-[#4CBFA4] rounded-[2vw] sm:rounded-[4vw] md:rounded-[30px] mt-[30vw] sm:mt-[2vw] md:mt-[325px] p-[0.5vw]">
            <img
              src="/assets/images/type=image2.png"
              alt="Image description 2"
              className="w-[26vw] sm:w-[19vw] md:w-[200px] h-auto"
            />
          </div>

          <img
            src="/assets/images/type=image3.png"
            alt="Image description 3"
            className="w-[38vw] sm:w-[35vw] md:w-[360px] h-auto mt-[20vw] sm:mt-[-15vw] md:mt-[160px]"
            style={{ transform: "translateX(1vw)" }}
          />
        </div>
      </section>

      <section
        id="SHARE"
        className="text-center pt-20 relative min-h-[600px] md:min-h-[650px] bg-[#F1F4FD] overflow-x-hidden"
      >
        <div className="hidden md:block absolute top-32 right-[120px] md:right-[480px] text-right">
          <div className="text-xl font-bold text-[#4CBFA4]">SHARE</div>
          <div className="text-4xl font-light mt-8 text-[#474D66]">
            내 위키 만들고
            <br />
            친구에게 공유해요
          </div>
        </div>

        <div className="md:hidden px-4 sm:px-6 text-right mt-10">
          <div className="text-lg font-bold text-[#4CBFA4]">SHARE</div>
          <div className="text-2xl font-light mt-2 text-[#474D66]">
            내 위키 만들고
            <br />
            친구에게 공유해요
          </div>
        </div>

        <div
          className="flex justify-center items-end mt-32 md:mt-64 gap-6 md:gap-24"
          style={{ flexWrap: "nowrap" }}
        >
          <div
            className="bg-[#DEE5F5] rounded-[25px] p-4"
            style={{
              width: "clamp(120px, 15vw, 200px)",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="/assets/images/type=image10.png"
              alt="Extra Image Left"
              className="w-full h-auto"
            />
          </div>

          {[
            { src: "type=image7.png", bg: "#B2A5FD" },
            { src: "type=image8.png", bg: "#ADEDDE" },
            { src: "type=image9.png", bg: "#DEE5F5" },
            { src: "type=image10.png", bg: "#DEE5F5" },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-[25px] p-4"
              style={{
                backgroundColor: img.bg,
                width: "clamp(120px, 15vw, 200px)",
              }}
            >
              <img
                src={`/assets/images/${img.src}`}
                alt={`Image ${i + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}

          <div
            className="bg-[#DEE5F5] rounded-[25px] p-4"
            style={{
              width: "clamp(120px, 15vw, 200px)",
              transform: "translateX(50%)",
            }}
          >
            <img
              src="/assets/images/type=image7.png"
              alt="Extra Image Right"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="view"
        className="text-center pt-14 relative bg-[#ECF0FA] min-h-[700px] sm:min-h-[800px] md:min-h-[800px] lg:min-h-[800px]"
      >
        <div className="hidden md:block absolute top-32 left-[120px] md:left-[480px] text-left">
          <div className="text-xl font-bold" style={{ color: "#4CBFA4" }}>
            VIEW
          </div>
          <div
            className="text-4xl font-light mt-8"
            style={{ color: "#474D66" }}
          >
            친구들이 달아준
            <br />
            내용을 확인해 봐요
          </div>
        </div>

        <div className="md:hidden px-4 sm:px-6 text-left mt-10">
          <div className="text-lg font-bold" style={{ color: "#4CBFA4" }}>
            VIEW
          </div>
          <div
            className="text-2xl font-light mt-2"
            style={{ color: "#474D66" }}
          >
            친구들이 달아준
            <br />
            내용을 확인해 봐요
          </div>
        </div>

        <div className="mt-16 md:mt-[16rem] flex justify-center relative">
          <img
            src="/assets/images/type=image4.png"
            alt="친구들이 달아준 내용 이미지"
            className="w-full max-w-[560px] h-auto"
          />
        </div>

        <div className="mt-6 md:mt-8 flex justify-center gap-6 relative">
          <div className="bg-[#8767F6] rounded-[15px] p-9 relative left-4 w-[160px] h-[160px]">
            <img
              src="/assets/images/type=image6.png"
              alt="Image 6"
              className="w-[100px] h-[100px] rounded-[20px]"
            />
          </div>

          <div className="p-5 w-[390px] relative left-[10px] mt-[-18px]">
            <img src="/assets/images/type=image5.png" alt="Image 5" />
          </div>
        </div>
      </section>

      <section
        id="mywiki"
        className="text-center pt-28 relative min-h-[370px] bg-[#474D66]"
      >
        <div className="text-4xl font-bold text-white mb-10">
          나만의 위키 만들어보기
        </div>
        <button
          onClick={handleClick}
          className="bg-[#FFFFFF] text-[#474D66] py-2.5 px-6 rounded-lg hover:bg-[#3B4356] transition"
        >
          위키 만들기
        </button>
      </section>
    </>
  );
};

export default LandingPage;
