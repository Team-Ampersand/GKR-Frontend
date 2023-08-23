import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuth = () => {
  const router = useRouter();
  const code = router.query.code?.toString() || '';

  useEffect(() => {
    if (!code) return;
    (async () => {
      //   await login(code);
      router.push('/');
    })();
  }, [code]);

  return;
};

export default useAuth;
