import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-950"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  );
};

export default Loading;