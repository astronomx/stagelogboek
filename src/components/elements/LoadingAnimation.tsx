import React from 'react';
import Image from 'next/image';
import Spinner from 'public/images/spinner.gif'

interface Props {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? <Image src={Spinner} alt="Loader" /> : null;
};

export default LoadingAnimation;
