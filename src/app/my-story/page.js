import React from 'react';
import MyStoryContent from '../components/contents/MyStory';

export const metadata = {
  title: 'my-story'
};

export default function MyStory() {
  return (
    <div
      id="my-story"
      className="page"
    >
      <MyStoryContent />
    </div>
  );
}
