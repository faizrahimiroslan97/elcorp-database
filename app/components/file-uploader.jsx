// app/components/file-uploader.jsx

import React, { useRef, useState } from "react";

export const FileUploader = ({ onChange, fileURL }) => {
  const [draggingOver, setDraggingOver] = useState(false);
  const fileInputRef = (useRef < HTMLInputElement) | (null > null);
  const dropRef = useRef(null);

  // 1
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 2
  const handleDrop = (e) => {
    preventDefaults(e);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  // 3
  const handleChange = (event) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      onChange(event.currentTarget.files[0]);
    }
  };

  // 4
  return (
    <div
      ref={dropRef}
      className={`${
        draggingOver
          ? "border-4 border-dashed border-yellow-300 border-rounded"
          : ""
      } group rounded-full relative w-24 h-24 flex justify-center items-center bg-gray-400 transition duration-300 ease-in-out hover:bg-gray-500 cursor-pointer`}
      style={{
        backgroundSize: "cover",
        ...(fileURL ? { backgroundImage: `url(${fileURL})` } : {}),
      }}
      onDragEnter={() => setDraggingOver(true)}
      onDragLeave={() => setDraggingOver(false)}
      onDrag={preventDefaults}
      onDragStart={preventDefaults}
      onDragEnd={preventDefaults}
      onDragOver={preventDefaults}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      {fileURL && (
        <div className="absolute w-full h-full bg-blue-400 opacity-50 rounded-full transition duration-300 ease-in-out group-hover:opacity-0" />
      )}
      {
        <p className="font-extrabold text-4xl text-gray-200 cursor-pointer select-none transition duration-300 ease-in-out group-hover:opacity-0 pointer-events-none z-10">
          +
        </p>
      }
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};