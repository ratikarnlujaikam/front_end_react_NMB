import React, { useState } from 'react';

function YourComponent() {
  const [file, setFile] = useState(null);

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  async function handleUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:2010/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default YourComponent;


