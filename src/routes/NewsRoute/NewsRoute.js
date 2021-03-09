import { useMediaQuery } from 'react-responsive';
import MobileNewsPage from '../../components/Mobile/MobileNewsPage/MobileNewsPage';
import DesktopNewsPage from '../../components/Desktop/DesktopNewsPage/DesktopNewsPage';

const NewsRoute = (props) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 767px)' });

  return isBigScreen ? (
    <DesktopNewsPage {...props} />
  ) : (
    <MobileNewsPage {...props} />
  );
};

export default NewsRoute;
