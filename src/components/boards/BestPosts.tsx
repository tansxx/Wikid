import Link from "next/link";
import Image from 'next/image';
import { postType } from '@/pages/boards';


export default function BestPosts({ bestPost }: {bestPost : postType[]}) {
  return (
    <>
      <div className="flex justify-between items-center mb-[60px] leading-[26px] text-[16px]">
        <h2 className="leading-[32px] text-[24px] lg:leading-[42px] lg:text-[32px] font-semibold">베스트 게시글</h2>

        <Link href="/wikiList">
            <button type="button" className="w-[130px] h-[45px] px-4 py-2 bg-[#4CBFA4] text-white rounded-md lg:w-[160px] leading-[24px] text-[14px] font-semibold">
              게시물 등록하기
            </button>
        </Link>
      </div>

      <div className='relative px-[20px] pb-[20px] mb-[40px] overflow-x-auto overflow-y-hidden'>
        <div className="flex gap-4 w-[1048px] md:w-full md:gap-5 md:flex-wrap lg:gap-4 lg:w-full lg:flex-nowrap ">
            {bestPost.map(post => (
              <Link key={post.writer.id} href={`/posts/${post.writer.id}`} className="flex-shrink-0 w-[250px] h-[200px] md:w-[calc(50%-10px)] md:h-[220px] lg:w-[calc(25%-12px)] rounded-lg shadow-[0px_4px_20px_0px_#00000014]">
                <img
                  alt="작성 이미지"
                  src={post.image}
                  className="rounded-lg w-full h-[131px] object-cover object-top" />
                <div className="p-[20px] pt-[11px] pb-[14px] md:p-[20px] md:pb-[13px] lg:p-[19px] lg:pb-[14px] text-lg">
                  <h3 className=" md:mb-[6px] md:text-[18px] font-semibold text-[#474D66]">{post.title}</h3>
                  <div className="flex justify-between leading-[18px] text-[12px] md:leading-[24px] md:text-[14px]">
                    <div className="text-[#8F95B2]">
                      <span>{post.writer.name}</span>
                      <span className='ml-[8px]'>{post.createdAt.split('T')[0]}</span>
                    </div>
                    <div className="text-[#8F95B2]">
                    <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block" />
                    {post.likeCount}
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
      </div>


    </>
  )
}
