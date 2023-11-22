import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setIsAppLoading } from '../redux/slices/common';

export default function useCommonState() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    theme,
    mode,
    loading: {
      app: isAppLoading
    }
  } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(setIsAppLoading(false));
  }, []);

  return {
    dispatch,
    theme,
    mode,
    isAppLoading
  };
}
