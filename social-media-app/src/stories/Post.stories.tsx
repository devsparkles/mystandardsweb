// Post.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Post from "../components/posts/Post";
import { useState } from 'react';
import React from 'react';


const meta: Meta<typeof Post> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Post',
  component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;


const PostWithHooks = () => {
  
  const post = {
    id: 1,
    created: new Date(),
    author: { name: "John Doe", date: new Date()},
    title: "Post 1",
    body: "Salut les copains, c'est moi, François le Français",
    likes_count: 12,
    liked: false,
  };    

  // Sets a click handler to change the label's value
  const handleRefresh = () => {
    console.log("handleRefresh");
  };
  return <Post post={post} refresh={handleRefresh} />;
};


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <PostWithHooks   />,
};