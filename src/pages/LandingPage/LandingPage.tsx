import React from 'react';

const LandingPage = () => {
  return (
    <>
      <section
        id="write"
        className="text-center pt-14"
        style={{
          background: 'linear-gradient(to bottom, #F1F4FD 50%, #474D66 50%)',
          borderTopLeftRadius: '50% 20%', 
          borderTopRightRadius: '50% 20%', 
        }}
      >
        <h1 className="text-[#474D66] text-6xl font-thin">남들이 만드는</h1>
        <p className="text-[#474D66] text-[90px] font-bold mb-4">나만의 위키</p>
        <a
          href="#products"
          className="bg-[#474D66] text-white py-2.5 px-6 rounded-lg hover:bg-[#3B4356] transition"
        >
          위키 만들기
        </a>
        <img
          src="/assets/images/type=image1.png"
          alt="Image description"
          className="mt-12 mx-auto max-w-[450px] h-auto"
        />

        <div className="mt-36 px-4">
          <p
            className="text-left text-2xl font-thin text-[#FFFFFF] mb-6"
            style={{ transform: 'translateX(88px)' }}
          >
            친구의 위키,<br />
            직접 작성해 봐요.
          </p>

          <div className="flex justify-center items-start gap-12">
            <div className="bg-[#4CBFA4] rounded-[20px] mt-20 p-2">
              <img
                src="/assets/images/type=image2.png"
                alt="Image description 2"
                className="max-w-[200px] h-auto"
              />
            </div>

            <img
              src="/assets/images/type=image3.png"
              alt="Image description 3"
              className="max-w-[350px] h-auto mt-4"
              style={{ transform: 'translateX(20px)' }}
            />
          </div>
        </div>
      </section>

      <section
        id="SHARE"
        className="text-center pt-14 relative min-h-[700px] bg-[#F1F4FD]"
      >
        <div className="absolute top-32 left-[65%] text-xl font-bold" style={{ color: '#4CBFA4' }}>
          SHARE
        </div>
        <div
          className="absolute top-40 left-[53%] text-4xl font-light text-right"
          style={{ color: '#474D66' }}
        >
          내 위키 만들고<br />친구에게 공유해요
        </div>
        <div className="flex justify-center gap-24 mt-64">
          <div className="bg-[#DEE5F5] rounded-[25px] p-4 w-[200px] absolute left-[-150px]">
            <img
              src="/assets/images/type=image10.png"
              alt="Extra Image Left"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="bg-[#B2A5FD] rounded-[25px] p-4">
            <img
              src="/assets/images/type=image7.png"
              alt="Image 7"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="bg-[#ADEDDE] rounded-[25px] p-4">
            <img
              src="/assets/images/type=image8.png"
              alt="Image 8"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="bg-[#DEE5F5] rounded-[25px] p-4">
            <img
              src="/assets/images/type=image9.png"
              alt="Image 9"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="bg-[#DEE5F5] rounded-[25px] p-4">
            <img
              src="/assets/images/type=image10.png"
              alt="Image 10"
              className="max-w-[200px] h-auto"
            />
          </div>

          <div className="bg-[#DEE5F5] rounded-[25px] p-4 w-[200px] absolute right-[-150px]">
            <img
              src="/assets/images/type=image7.png"
              alt="Extra Image Right"
              className="max-w-[200px] h-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="view"
        className="text-center pt-14 relative min-h-[850px] bg-[#ECF0FA]"
      >
        <div className="absolute top-32 right-[65%] text-xl font-bold" style={{ color: '#4CBFA4' }}>
          VIEW
        </div>

        <div
          className="absolute top-40 right-[51%] text-4xl font-light text-left"
          style={{ color: '#474D66' }}
        >
          친구들이 달아준<br />내용을 확인해 봐요
        </div>

        <div className="mt-[18rem] flex justify-center">
          <img
            src="/assets/images/type=image4.png"
            alt="친구들이 달아준 내용 이미지"
            className="w-[560px] h-auto"
          />
        </div>

        <div className="mt-8 flex justify-center gap-6 relative">
          <div className="bg-[#EAE5FB] rounded-[25px] p-4 w-[200px] relative left-[-70px]">
            <img
              src="/assets/images/type=image6.png"
              alt="Image 6"
              className="w-full h-auto rounded-[20px]"
            />
          </div>

          <div className="p-4 w-[400px] relative left-[-80px]">
            <img
              src="/assets/images/type=image5.png"
              alt="Image 5"
            />
          </div>
        </div>
      </section>

      <section
        id="mywiki"
        className="text-center pt-14 relative min-h-[400px] bg-[#474D66]"
      >
        <div
          className="absolute top-40 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-left"
          style={{ color: '#FFFFFF' }}
        >
          나만의 위키 만들어보기
        </div>
        <a
          href="#products"
          className="bg-[#FFFFFF] text-[#474D66] py-2.5 px-6 rounded-lg hover:bg-[#3B4356] transition mt-8"
        >
          위키 만들기
        </a>
      </section>
    </>
  );
};

export default LandingPage; 
