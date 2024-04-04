import { useEffect, useState } from "react";

interface UsePasswordReturn {
  isVisible: boolean | undefined;
  togglePassword: () => void;
}

const usePassword = (defaultValue: undefined): UsePasswordReturn => {
  const [isVisible, setIsVisible] = useState<boolean | undefined>(defaultValue);

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsVisible(defaultValue);
  }, []);

  return { isVisible, togglePassword };
};

export default usePassword;
