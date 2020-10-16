import React from 'react';

import { useForm } from "react-hook-form";
import api from '../../../../services/api';

import Modal from '../../../../components/Modal';

import { Form } from './styles';



const ModalAddComment = ({
  isOpen,
  handleCloseModal,
  setComments,
  comments
}) => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = data => {
    api.post('posts', data).then(response => {
       
      setComments([...comments, response.data])
      handleCloseModal()
    });
  }



  return (
    <Modal 
    isOpen={isOpen} 
    handleCloseModal={handleCloseModal} 
    title="Adicionar Comentários"
    height={520}
    width={500}
    
    >

  <Form onSubmit={handleSubmit(onSubmit)}>
      
      
      
      <label htmlFor="body">Comentário</label>
      <textarea name="body" ref={register({ required: true })} />
      {errors.body && <span>{errors.body.message}</span>}
      
      
      <button type="submit">SALVAR</button>
  </Form>



    </Modal>
      
  );
};

export default ModalAddComment;