import { useRef } from 'react';

import useLoginQuery from '../api/useLoginQuery';

const useLogin = () => {
  const { isPageLoading, loginMutation } = useLoginQuery();

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userIdRef.current && passwordRef.current) {
      const userId = userIdRef.current.value;
      const password = passwordRef.current.value;

      loginMutation.mutate({ userId, password });
    }
  };

  return {
    userIdRef,
    passwordRef,
    isLoading: loginMutation.isLoading,
    isPageLoading,
    handleSubmit,
  };
};

export default useLogin;
