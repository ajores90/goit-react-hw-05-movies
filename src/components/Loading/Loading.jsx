import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <TailSpin
      height="30"
      width="30"
      color="#768F96"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
