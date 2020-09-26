import { useEffect } from 'react';

const useClickAway = (ref, cb) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.currentTarget)) {
      cb();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickAway;
