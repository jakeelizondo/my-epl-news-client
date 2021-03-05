import { useMediaQuery } from 'react-responsive';
import MobileNewsPage from '../../components/Mobile/MobileNewsPage/MobileNewsPage';
import DesktopNewsPage from '../../components/Desktop/DesktopNewsPage/DesktopNewsPage';

const NewsRoute = () => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 767px)' });

  return isBigScreen ? <DesktopNewsPage /> : <MobileNewsPage />;
};

export default NewsRoute;
