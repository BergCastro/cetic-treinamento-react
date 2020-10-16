import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { posts, comments } from './server'

interface CreatePostDto {
  title: string; 
  author: string; 
  datePost: string; 
  body: string;
  category: string;

}

interface CreateCommentDto {
  body: string; postId: number; 

}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  findPosts(): any {
    return posts;
  }

  @Get('posts/:id')
  showPost(@Param('id')  id): any {
    
    const post = posts.find(post => post.id === Number(id))
   

    return post;
  }

  @Post('posts')
  createPost(@Body() createPost: CreatePostDto): any {
    const id = posts.length + 1;
    const newPost = {id, ...createPost};
    posts.push(newPost);

    return newPost;
  }

  @Get('comments')
  findComments(): any {
    return comments;
  }

  @Post('comments')
  createComment(@Body() createComment: CreateCommentDto): any {
    const id = comments.length + 1;
    const newComment = {id, ...createComment};
    comments.push(newComment);

    return newComment;
  }
}
