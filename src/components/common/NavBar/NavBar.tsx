import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  isLoggedIn: boolean;
  profileImageUrl?: string;
}

export default function Navbar({ isLoggedIn, profileImageUrl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/assets/images/img_logo.png"
              alt="로고"
              width={60}
              height={60}
            />
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="/wiki">
              <span className="text-gray-800 text-sm font-medium hover:text-[#4CBFA4]">
                위키목록
              </span>
            </Link>
            <Link href="/board">
              <span className="text-gray-800 text-sm font-medium hover:text-[#4CBFA4]">
                자유게시판
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/notifications">
                <Image
                  src="/assets/icons/ic_alarm.svg"
                  alt="알람"
                  width={24}
                  height={24}
                />
              </Link>

              <div className="relative" ref={profileRef}>
                <button onClick={() => setProfileOpen((prev) => !prev)}>
                  <Image
                    src={profileImageUrl || "/assets/icons/ic_profile.svg"}
                    alt="프로필"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md border z-50 flex flex-col items-start p-2 space-y-2">
                    <Link
                      href="/settings"
                      className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
                    >
                      계정 설정
                    </Link>
                    <Link
                      href="/my-wiki"
                      className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
                    >
                      내 위키
                    </Link>
                    <Link
                      href="/logout"
                      className="text-sm text-gray-500 hover:text-gray-700 w-full"
                    >
                      로그아웃
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-[#4CBFA4] text-white px-4 py-2 rounded-md hover:opacity-90">
                로그인
              </button>
            </Link>
          )}
        </div>

        <div className="md:hidden relative">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            <Image
              src="/assets/images/type=menu.png"
              alt="메뉴"
              width={24}
              height={24}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-50 flex flex-col items-start p-2 space-y-2">
              <Link
                href="/wiki"
                className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
              >
                위키목록
              </Link>
              <Link
                href="/board"
                className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
              >
                자유게시판
              </Link>

              {isLoggedIn ? (
                <>
                  <Link
                    href="/notifications"
                    className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
                  >
                    알림
                  </Link>
                  <Link
                    href="/profile"
                    className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
                  >
                    마이페이지
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-sm text-gray-700 hover:text-[#4CBFA4] w-full"
                >
                  로그인
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
