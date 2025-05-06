import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Modal from './TimeoutModal';

function TimeoutModalParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRetry = () => {
    closeModal();
    router.push('/wiki-participation');
  };

  const resetTimer = useCallback(() => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      openModal();
    }, 10000); // 테스트용
  }, []);

  useEffect(() => {
    // 유휴 상태 판단 이벤트
    const events = ['mousemove', 'keydown', 'mousedown', 'scroll', 'touchstart'];

    const handleActivity = () => {
      if (!isModalOpen) resetTimer();
    };

    events.forEach(event => window.addEventListener(event, handleActivity));
    resetTimer(); 

    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [resetTimer, isModalOpen]);

  return (
    <Modal onClose={closeModal} onRetry={handleRetry} isOpen={isModalOpen} />
  );
}

export default TimeoutModalParentComponent;
