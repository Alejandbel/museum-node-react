import React, { useRef } from 'react';
import Modal from '../../../components/Modal';
import Input from '../../../components/forms/Input';
import Select from '../../../components/forms/Select';

/**
 * @param {boolean} isOpen
 * @param onSubmit
 * @param {UserListItem[]} userList
 * @constructor
 */
function CreateExhibitModal({ isOpen, onSubmit, userList }) {
  const titleRef = useRef(null);
  const employeeRef = useRef(null);
  const typeOfArtsRef = useRef(null);
  const receiptDateRef = useRef(null);
  const fileRef = useRef(null);

  const onModalSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const employee = employeeRef.current.value;
    const typesOfArt = typeOfArtsRef.current.value?.split(',');
    const receiptDate = receiptDateRef.current.value;
    const file = fileRef.current.files?.[0];

    onSubmit({
      title,
      employee,
      typesOfArt,
      receiptDate,
      file,
    });
  };

  return (
    <Modal isOpen={isOpen} hasCloseBtn>
      <form onSubmit={onModalSubmit}>
        <Input ref={titleRef} type="text" name="title" label="Title" />
        <Select
          ref={employeeRef}
          label="Emplyee"
          name="employee"
          items={userList.map((user) => ({
            key: user._id,
            value: user._id,
            option: `${user.firstname} ${user.lastname}`,
          }))}
        />
        <Input ref={typeOfArtsRef} type="text" name="typeOfArts" label="Type of arts" />
        <Input ref={receiptDateRef} type="date" name="receiptDate" label="Receipt date" />
        <Input ref={fileRef} type="file" name="file" label="Image" />
        <input type="submit" value="Sumbit" />
      </form>
    </Modal>
  );
}

export default CreateExhibitModal;
