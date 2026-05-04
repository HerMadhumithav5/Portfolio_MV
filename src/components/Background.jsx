import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default Background;