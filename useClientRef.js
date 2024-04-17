import { useRef } from 'react';

const useClientRef = () => {
  if (typeof window !== 'undefined') {
    return useRef();
  } else {
    return null;
  }
};

export default useClientRef;
