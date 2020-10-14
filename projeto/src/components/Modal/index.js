import React from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { Container, ModalContent, ModalHeader } from './styles';

// interface IModalProps {
//   isOpen: boolean;
//   title: string;
//   handleCloseModal(): void;
//   width: number;
//   height: number;
// }

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90vh',
    maxHeight: '90wh',
  },
};

const Modal = ({
  isOpen,
  handleCloseModal,
  children,
  title,
  height,
  width,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: { ...customStyles.content, height, width },
      }}
      ariaHideApp={false}
    >
      <Container>
        <ModalHeader>
          <div>{title}</div>

          <button type="button" onClick={handleCloseModal}>
            <FaTimes size={15} />
          </button>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>

      </Container>
    </ReactModal>
  );
};

export default Modal;
