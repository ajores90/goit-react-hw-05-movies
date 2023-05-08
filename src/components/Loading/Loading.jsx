import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loading.styled';

const Loading = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loading;
