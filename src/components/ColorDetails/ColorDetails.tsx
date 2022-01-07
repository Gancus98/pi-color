import React from 'react';
import * as Styled from './ColorDetails.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ColorDetailsProps = {
  colorDescription: string;
  colorValue: string;
};

const ColorDetails: React.FC<ColorDetailsProps> = ({
  colorDescription,
  colorValue,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(colorValue);
    toast.success(`Color copied to clipboard`, {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Styled.Wrapper>
        {/* <Styled.DescriptionWrapper> */}

        <Styled.ColorDescription>{colorDescription}</Styled.ColorDescription>
        {/* </Styled.DescriptionWrapper> */}
        <Styled.CopyWrapper onClick={handleCopyClick}>
          <Styled.ColorValue>{colorValue}</Styled.ColorValue>
          <Styled.CopyIcon alt="copy icon" src="/img/copy.png" />
        </Styled.CopyWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default ColorDetails;
