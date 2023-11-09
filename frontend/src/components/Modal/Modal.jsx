import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';

function Modal({
  children, isOpen, hasCloseBtn, onClose,
}) {
  /** @type {React.MutableRefObject<HTMLDialogElement | null>} */
  const dialogRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = dialogRef.current;

    if (isModalOpen) {
      modalElement?.showModal();
    } else {
      modalElement?.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <dialog className={styles.modal} ref={dialogRef} onClose={onClose}>
      {hasCloseBtn && (
        <button className={styles.closeButton} onClick={handleCloseModal}>
          x
        </button>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
