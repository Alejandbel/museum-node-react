import React, { useRef } from 'react';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';

function CreateFeedbackModal({ isOpen, onSubmit }) {
  const titleRef = useRef(null);
  const ratingRef = useRef(null);
  const contentRef = useRef(null);

  const onModalSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const rating = ratingRef.current.value;
    const content = contentRef.current.value;

    // TODO: validate

    onSubmit({
      title, rating, content,
    });
  };

  return (
    <Modal isOpen={isOpen} hasCloseBtn>
      <form onSubmit={onModalSubmit}>
        <Input ref={titleRef} type="text" name="title" label="Title" />
        <Input ref={ratingRef} type="number" name="rating" label="Rating" />
        <Input ref={contentRef} type="text" name="content" label="Contnet" />
        <input type="submit" value="Sumbit" />
      </form>
    </Modal>
  );
}

export default CreateFeedbackModal;
