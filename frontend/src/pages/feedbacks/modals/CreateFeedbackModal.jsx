import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';
import { useAuth } from '../../../hooks/useAuth';
import { validateOrToast } from '../../../utils/toasts';

const createFeedbackSchema = Joi.object({
  title: Joi.string().required(),
  rating: Joi.number().required().min(1).max(5),
  content: Joi.string().required(),
});

/**
 * @param {(feedback: Pick<Feedback, 'title' | 'rating' | 'content'>) => unknown}onSubmit
 */
function CreateFeedbackModal({ onSubmit }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const titleRef = useRef(null);
  const ratingRef = useRef(null);
  const contentRef = useRef(null);

  const onModalSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const rating = ratingRef.current.value;
    const content = contentRef.current.value;

    validateOrToast(createFeedbackSchema, {
      title, rating, content,
    }, (data) => {
      setModalOpen(false);
      onSubmit(data);
    });
  };

  const onModalOpenClick = () => {
    if (!user) {
      navigate('/');
    }
    setModalOpen(true);
  };

  return (
    <>
      <button className="button button-green" onClick={onModalOpenClick}>Leave feedback</button>
      <Modal isOpen={isModalOpen} hasCloseBtn onClose={() => setModalOpen(false)}>
        <form className="form" onSubmit={onModalSubmit}>
          <Input ref={titleRef} type="text" name="title" label="Title" />
          <Input ref={ratingRef} type="number" name="rating" min="1" max="5" label="Rating" />
          <Input ref={contentRef} type="text" name="content" label="Contnet" />
          <button className="button button-green" type="submit">Submit</button>
        </form>
      </Modal>
    </>

  );
}

export default CreateFeedbackModal;
