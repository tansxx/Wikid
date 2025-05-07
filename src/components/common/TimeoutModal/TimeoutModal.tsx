import { useRouter } from 'next/router';
import CloseButton from '@/components/common/CloseButton/CloseButton';
import PrimaryButton from '@/components/common/Button/Button';

type ConnectionLostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
};

const ConnectionLostModal = ({ isOpen, onClose }: ConnectionLostModalProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleRetry = () => {
    onClose();
    router.push('/wiki-participation');  //위키 참여하기 페이지로 이동
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl w-[400px] p-8 shadow-lg">
        <div className="absolute top-4 right-4">
          <CloseButton onClose={onClose} />
        </div>
        <div className="text-center mt-4 mb-6">
          <p className="text-black text-lg font-semibold mb-2">
            5분 이상 글을 쓰지 않아 접속이 끊어졌어요.
          </p>
          <p className="text-[#888888] text-sm">
            위키 참여하기를 통해 다시 위키를 수정해 주세요.
          </p>
        </div>
        <div className="flex justify-end mt-8">
          <PrimaryButton onClick={handleRetry} variant="filled-green" size="md">
            확인
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ConnectionLostModal;
