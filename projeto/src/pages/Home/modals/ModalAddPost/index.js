import React from 'react';

import { useForm } from "react-hook-form";
import api from '../../../../services/api';

import Modal from '../../../../components/Modal';

import { Form } from './styles';



const ModalAddPost = ({
  isOpen,
  handleCloseModal,
  setPosts,
  posts,
  categories,
}) => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = data => {
    api.post('posts', data).then(response => {
       
      setPosts([...posts, response.data])
      handleCloseModal()
    });
  }



  return (
    <Modal 
    isOpen={isOpen} 
    handleCloseModal={handleCloseModal} 
    title="Adicionar Post"
    
    height={580}
    width={500}
    
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
      
      <label htmlFor="title">Título</label>
      <input name="title"  ref={register({ required: { message: "Este campo é requerido" , value: true} })} />      
      {errors.title && <span>{errors.title.message}</span>}
     
      <label htmlFor="author">Autor</label>
      <input name="author" ref={register({ required: true })} />
      {errors.author && <span>Este campo é requerido</span>}
      
      <label htmlFor="datePost">Data do Post</label>
      <input name="datePost" ref={register({ required: true })} />
      {errors.datePost && <span>Este campo é requerido</span>}

      <label htmlFor="body">Conteúdo</label>
      <textarea name="body" ref={register({ required: true })} />
      {errors.body && <span>Este campo é requerido</span>}

      <label htmlFor="category">Categoria</label>
      <select name="category" >
        {categories && categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>

        ))}
      </select>
      {errors.category && <span>Este campo é requerido</span>}
      
      
      <button type="submit">SALVAR</button>
    </Form>



    </Modal>
      
  );
};

export default ModalAddPost;
