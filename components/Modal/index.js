import React, { useRef, useEffect } from 'react';
import { Bg, Container, ButtonClose } from './style';

const useOutsideAlerter = (ref, handleClose) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClose();
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const Modal = ({ handleClose, children }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleClose);
  return (
    <Bg>
      <Container ref={wrapperRef}>
        <ButtonClose onClick={handleClose}>
          X
        </ButtonClose>
        {children}
      </Container>
    </Bg>
  );
};

export default Modal;