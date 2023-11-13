import React, { useRef, useState } from 'react';
import Joi from 'joi';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';
import { validateOrToast } from '../../../utils/toasts';

const articleSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  content: Joi.string().required(),
  file: Joi.any().required(),
});

function ArticleModal({
  className, onSubmit, buttonText,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  const fileRef = useRef(null);

  const onModalSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const content = contentRef.current.value;
    const file = fileRef.current.files?.[0];

    validateOrToast(articleSchema, {
      title,
      description,
      content,
      file,
    }, (data) => {
      setModalOpen(false);
      onSubmit(data);
    });
  };

  return (

    <>
      <button className={className} onClick={() => setModalOpen(true)}>{buttonText}</button>
      <Modal isOpen={isModalOpen} hasCloseBtn onClose={() => setModalOpen(false)}>
        <form className="form" onSubmit={onModalSubmit}>
          <Input ref={titleRef} type="text" name="title" label="Title" />
          <Input
            ref={descriptionRef}
            type="text"
            name="description"
            label="Description"
          />
          <Input
            ref={contentRef}
            type="text"
            name="content"
            label="Content"
          />
          <Input ref={fileRef} type="file" name="file" label="Image" />
          <button className="button button-green" type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
}

export default ArticleModal;
