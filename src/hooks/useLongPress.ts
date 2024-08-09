import { useRef } from 'react';

type UseLongPressOptions = {
  onLongPress: () => void;
  delay?: number;
};

const useLongPress = ({ onLongPress, delay = 500 }: UseLongPressOptions) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    if ('ontouchstart' in window) {
      timeoutRef.current = setTimeout(() => {
        onLongPress();
      }, delay);
    }
  };

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return {
    onTouchStart: start,
    onTouchEnd: clear,
    onTouchMove: clear,
    onTouchCancel: clear,
  };
};

export default useLongPress;
