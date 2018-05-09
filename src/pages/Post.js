import React from 'react';
import BigText from '../components/BigText';

const Post = ({match}) => {
  console.log(match);
  return (
    <div>
      <BigText>포스트 {match.params.id}</BigText>
    </div>
  )
}

export default Post;
