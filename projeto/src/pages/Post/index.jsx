import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Box from "../../components/Box";
import RoundButton from "../../components/RoundButton";
import InputSearch from "../../components/InputSearch";
import ModalAddComment from './modals/ModalAddComment';
import api from "../../services/api";
import Header from './Header';
import { Container, Filters, Content, Body } from "./styles";

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  
  const [showModalAddComment, setShowModalAddComment] = useState(false);
  

  const categories = ["HTML", "Jabascript", "CSS", "React"];

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get(`/posts/${id}`);
      setPost(data);
      
    }

    loadPost();
  }, [id]);


  const handleCloseModalAddComment = () => {
    setShowModalAddComment(false)
  }

  return (
    <>
      {post && (
        <Container>
          <Content>
            <Header post={post}/>
            <Body>
              <p>

              {post.body}
              </p>

            </Body>

          </Content>

        <Filters>
          <Box title="Pesquisar">
            <InputSearch />
          </Box>

          <Box title="Categorias">
            <div>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </Filters>
      </Container>
      )}
      
      
      <ModalAddComment
      isOpen={showModalAddComment} 
      handleCloseModal={handleCloseModalAddComment}  
      setComments={setComments}
      comments={comments}
      />
      
    </>
  );
};

export default Post;
