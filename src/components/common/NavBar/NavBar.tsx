import { useProfileCode } from "@/hooks/mywiki/useProfileCode";
import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import NotificationModal from "@/components/myWikiPage/NotificationModal/NotificationModal";

interface NavbarProps {
  profileImageUrl?: string;
}

export default function Navbar({ profileImageUrl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const code = useProfileCode();

  const router = useRouter();
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
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50 h-[60px] md:h-[80px]">
      <div className="w-full px-[20px] py-3 flex items-center justify-between relative drop-shadow-md md:h-[80px] md:px-[80px]">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="로고"
              width={107}
              height={30}
            />
          </Link>

          <div className="hidden md:flex space-x-10">
            <Link href="/wikilist">
              <span className="text-gray400 text-sm  ">위키목록</span>
            </Link>
            <Link href="/boards">
              <span className="text-gray400 text-sm ">자유게시판</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button onClick={() => setIsNotificationOpen(true)}>
                <Image
                  src="/assets/icons/ic_alarmLarge.svg"
                  alt="알람"
                  width={30}
                  height={30}
                />
              </button>

              <div className="relative top-1" ref={profileRef}>
                <button onClick={() => setProfileOpen((prev) => !prev)}>
                  <Image
                    src={profileImageUrl || "/assets/icons/ic_profile.svg"}
                    alt="프로필"
                    width={30}
                    height={30}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute  top-full mt-2  w-20 bg-white shadow-lg rounded-md border  flex flex-col  p-2 space-y-2">
                    <Link
                      href="/mypage"
                      className="text-sm text-gray-700 w-full"
                    >
                      계정 설정
                    </Link>
                    <Link
                      href={`/wiki/${code}`}
                      className="text-sm text-gray-700 w-full"
                    >
                      내 위키
                    </Link>
                    <Link
                      href="/"
                      onClick={handleLogout}
                      className="text-sm  text-text-gray-700 w-full"
                    >
                      로그아웃
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link href="/login" className=" text-gray400 text-sm">
              로그인
            </Link>
          )}
        </div>
        <div className="md:hidden relative top-1">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            <Image
              src="/assets/icons/ic_menu.svg"
              alt="메뉴"
              width={25}
              height={25}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg border z-50 flex rounded-md flex-col items-center p-2 space-y-2">
              <Link href="/wikilist" className="text-sm text-gray-700  w-full">
                위키목록
              </Link>
              <Link href="/board" className="text-sm text-gray-700 w-full">
                자유게시판
              </Link>

              {isLoggedIn ? (
                <>
                  <button onClick={() => setProfileOpen((prev) => !prev)}>
                    href="/notifications" className="text-sm text-gray-700
                    w-full" 알림
                  </button>
                  <Link
                    href="/profile"
                    className="text-sm text-gray-700  w-full"
                  >
                    마이페이지
                  </Link>
                  <Link
                    href="/"
                    className="text-sm text-gray-700  w-full"
                    onClick={handleLogout}
                  >
                    로그아웃
                  </Link>
                </>
              ) : (
                <Link href="/login" className="text-sm text-gray-700  w-full">
                  로그인
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {isNotificationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <NotificationModal onClose={() => setIsNotificationOpen(false)} />
        </div>
      )}
    </nav>
  );
}
