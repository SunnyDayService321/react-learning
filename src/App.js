import React from 'react';

function AboutPage() {

    // userオブジェクトを定義する
    const user = {
      name: '田中太郎',
      imageUrl: 'https://via.placeholder.com/150x150/4CAF50/white?text=太郎',
      imageSize: 100
    };

  return (
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
  />

  );
}

export default AboutPage;
