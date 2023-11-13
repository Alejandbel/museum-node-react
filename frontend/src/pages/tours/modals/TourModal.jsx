import React, { useRef, useState } from 'react';
import Joi from 'joi';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';
import Select from '../../../components/forms/Select';
import { useQuery } from '../../../hooks/useQuery';
import { validateOrToast } from '../../../utils/toasts';
import { exhibitsService } from '../../../services/api/exhibitsService';

const tourSchema = Joi.object({
  title: Joi.string().required(),
  exhibits: Joi.array().items(Joi.string()).required(),
  date: Joi.date().required(),
});

/**
 * @param className
 * @param onSubmit
 * @param buttonText
 */
function TourModal({
  className, onSubmit, buttonText,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const titleRef = useRef(null);
  const exhibitsRef = useRef(null);
  const dateRef = useRef(null);

  const {
    isLoading,
    result,
    error,
  } = useQuery(() => exhibitsService.findExhibits());

  if (error) {
    return null;
  }

  const onModalSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const exhibits = Array.from(
      exhibitsRef.current?.selectedOptions ?? [],
      (option) => option.value,
    );
    const date = dateRef.current.value;

    validateOrToast(tourSchema, {
      title,
      exhibits,
      date,
    }, (data) => {
      setModalOpen(false);
      onSubmit(data);
    });
  };

  return (
    !isLoading
    && (
      <>
        <button className={className} onClick={() => setModalOpen(true)}>{buttonText}</button>
        <Modal isOpen={isModalOpen} hasCloseBtn onClose={() => setModalOpen(false)}>
          <form className="form" onSubmit={onModalSubmit}>
            <Input ref={titleRef} type="text" name="title" label="Title" />
            <Select
              ref={exhibitsRef}
              label="Exhibit"
              name="exhibit"
              multiple
              items={result.items.map((exhibit) => ({
                key: exhibit._id,
                value: exhibit._id,
                option: exhibit.title,
              }))}
            />
            <Input
              ref={dateRef}
              type="datetime-local"
              name="date"
              label="Date"
            />
            <button className="button button-green" type="submit">Submit</button>
          </form>
        </Modal>
      </>
    )
  );
}

export default TourModal;
