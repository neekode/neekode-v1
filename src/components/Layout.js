import { useSelector } from 'react-redux';

/* Layout is wrapped around each individual page route.  */
export default function Layout({ children }) {
  const { theme } = useSelector((state) => state.common);
  return (
    <div className={ `${theme === 'dark' ? 'dark-theme' : 'light-theme'}` }>
      { children }
    </div>
  );
}
