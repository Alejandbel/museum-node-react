import React, { useRef, useState } from 'react';
import Joi from 'joi';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';
import Select from '../../../components/forms/Select';
import { useQuery } from '../../../hooks/useQuery';
import { usersService } from '../../../services/api';
import { validateOrToast } from '../../../utils/toasts';
import { getFormattedDate } from '../../../utils/date';

const exhibitSchema = Joi.object({
  title: Joi.string().required(),
  typesOfArt: Joi.array().min(1).items(Joi.string()).required(),
  receiptDate: Joi.date().required(),
  file: Joi.any().required(),
  employee: Joi.string().required(),
});

/**
 * @param className
 * @param onSubmit
 * @param {Exhibit} baseExhibit
 * @param buttonText
 */
function ExhibitModal({
  className, onSubmit, baseExhibit, buttonText,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const titleRef = useRef(null);
  const employeeRef = useRef(null);
  const typeOfArtsRef = useRef(null);
  const receiptDateRef = useRef(null);
  const fileRef = useRef(null);

  const {
    isLoading,
    result,
    error,
  } = useQuery(() => usersService.getUserList());

  if (error) {
    return null;
  }

  const onModalSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const employee = employeeRef.current.value;
    const typesOfArt = (typeOfArtsRef.current.value || undefined)?.split(',');
    const receiptDate = receiptDateRef.current.value;
    const file = fileRef.current.files?.[0] ?? baseExhibit?.imagePath;

    validateOrToast(exhibitSchema, {
      title,
      employee,
      typesOfArt,
      receiptDate,
      file,
    }, (data) => {
      setModalOpen(false);
      onSubmit({ ...data, _id: baseExhibit._id });
    });
  };

  return (
    !isLoading
    && (
      <>
        <button className={className} onClick={() => setModalOpen(true)}>{buttonText}</button>
        <Modal isOpen={isModalOpen} hasCloseBtn onClose={() => setModalOpen(false)}>
          <form className="form" onSubmit={onModalSubmit}>
            <Input ref={titleRef} type="text" name="title" defaultValue={baseExhibit?.title} label="Title" />
            <Select
              ref={employeeRef}
              label="Emplyee"
              name="employee"
              defaultValue={baseExhibit?.employee?._id}
              items={result.items.map((user) => ({
                key: user._id,
                value: user._id,
                option: `${user.firstname} ${user.lastname}`,
              }))}
            />
            <Input
              ref={typeOfArtsRef}
              type="text"
              defaultValue={baseExhibit?.typesOfArt?.join(',')}
              name="typeOfArts"
              label="Type of arts"
            />
            <Input
              ref={receiptDateRef}
              type="date"
              defaultValue={baseExhibit?.receiptDate
                ? getFormattedDate(baseExhibit.receiptDate)
                : null}
              name="receiptDate"
              label="Receipt date"
            />
            <Input ref={fileRef} type="file" vname="file" label="Image" />
            <button className="button button-green" type="submit">Submit</button>
          </form>
        </Modal>
      </>
    )
  );
}

export default ExhibitModal;
