import Image from 'next/image';
import IcLink from '@/assets/icons/ic_link.svg';

const searchProfile = [
    {
      "id": 735,
      "code": "1e0e70c3-eca4-44bb-b06c-893ccd1f1457",
      "image": null,
      "city": "서울",
      "nationality": "대한민국",
      "job": "학생",
      "updatedAt": "2025-04-30T08:47:18.879Z",
      "name": "dfsdsfssf"
    },
    {
      "id": 734,
      "code": "f4b77c8b-cb28-4443-8e54-a1aec0a61e82",
      "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "city": "서울",
      "nationality": "대한민국",
      "job": "학생",
      "updatedAt": "2025-04-30T08:41:22.315Z",
      "name": "반팔이"
    },
    {
      "id": 733,
      "code": "fe6df981-e900-4d71-9943-6433dcf9539d",
      "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
      "city": "서울",
      "nationality": "대한민국",
      "job": "학생",
      "updatedAt": "2025-04-30T08:08:08.606Z",
      "name": "혁진손"
    }
  ]

export default function WikiSearchList() {
  return (
    <>
      <p className='px-[20px] mb-[40px] md:mb-[50px] lg:mb-[57px] text-[#8F95B2]'>“동욱”님을 총 <span className="text-[#4CBFA4]">3</span>명 찾았습니다.</p>
      <div className='
          relative p-[20px] overflow-x-auto overflow-y-hidden
          mb-[50px] md:mb-[60px] lg:mb-[100px]
        '>
        <div className="flex flex-col gap-4 w-full md:gap-5 md:flex-wrap lg:gap-4 lg:w-full lg:flex-nowrap overflow-visible">
            {searchProfile.map((profile) => (
              <div key={profile.id}
                className="relative flex flex-col justify-between flex-shrink-0 rounded-lg
                  pt-[21px] pr-[25px] pb-[21px] pl-[105px]
                  md:flex-row md:py-[24px] md:pr-[36px] md:pl-[153px]
                  shadow-[0px_4px_20px_0px_#00000014]">
                  <div className="text-lg">
                      <a href="#">
                        <img
                          alt={profile.name}
                          src={profile.image || "/assets/images/img_default_profile.png"}
                          className="absolute left-[25px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] object-cover object-top rounded-full md:w-[85px] md:h-[85px] rounded-full"
                        />
                        <h3 className="
                          font-semibold text-[#474D66]
                          mb-[10px] leading-[24px] text-[20px]
                          md:mb-[14px] md:leading-[32px] md:text-[24px]">
                          {profile.name}
                        </h3>
                        <div className="flex justify-between
                           mb-[14px]
                           md:mb-0
                          ">
                          <div className="">
                            <span className='
                              block text-[#8F95B2]
                              mb-[6px] leading-[17px] text-[12px]
                              md:mb-0 md:leading-[24px] md:text-[14px]
                              '>{profile.city}, {profile.nationality}</span>
                            <span className='
                              block text-[#8F95B2]
                              mb-[6px] leading-[17px] text-[12px]
                              md:mb-0 md:leading-[24px] md:text-[14px]
                              '>{profile.job}</span>
                          </div>
                        </div>
                      </a>
                  </div>

                  <div className=" py-[4px] pl-[10px] pr-[14px] bg-[#EEF9F6] rounded-full
                    w-auto self-start
                      md:self-end
                    whitespace-nowrap truncate">
                    <IcLink className="inline align-[-6px] mr-2" color="#000"/>
                    <a href="#" className='leading-[18px] md:text-[14px] text-[#4CBFA4]'>https://www.wikied.kr/kimdong</a>
                  </div>
                </div>
            ))}
          </div>
      </div>
      <nav aria-label="Pagination" className="isolate flex -space-x-px rounded-md shadow-xs gap-[11px] justify-center">
          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative inline-flex  items-center rounded-l-md px-2 py-2 text-[#8F95B2] hover:bg-gray-50 focus:z-20`}>
            <Image src="/assets/icons/ic_arrow_left.svg" alt="이전으로" width={18} height={18} className="inline-block" />
            <span className="sr-only">Previous</span>
          </a>

          <a href="#" aria-current="page"
            className={`shadow-[0px_4px_20px_0px_#00000014] relative z-10 inline-flex items-center text-[#4CBFA4] px-4 py-2 text-sm focus:z-20`}
          >
            1
          </a>
          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative inline-flex items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20`}
          >
            2
          </a>

          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20`}
          >
            3
          </a>
          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20`}
          >
            4
          </a>
          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative inline-flex items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20`}
          >
            5
          </a>
          <a href="#" className={`shadow-[0px_4px_20px_0px_#00000014] relative inline-flex items-center rounded-r-md px-2 py-2 text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20`}>
            <Image src="/assets/icons/ic_arrow_right.svg" alt="이전으로" width={18} height={18} className="inline-block" />

            <span className="sr-only">Next</span>
          </a>
      </nav>

    </>

  )
}
