import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadItems = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [items, setItems] = useState([]);
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [price, setPrice] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://wongebackend.onrender.com/shops');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };
  console.log(items);

  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleTypeChange = (event) => setTypeOfProduct(event.target.value);
  const handlePriceChange = (event) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value)) setPrice(value);
  };
  const handleWhatsappMessageChange = (event) => setWhatsappMessage(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setSubmitError('Please upload a photo.');
    if (!price) return setSubmitError('Please enter a valid price.');

    setUploading(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('type', typeOfProduct);
    formData.append('price', price);
    formData.append('whatsappMessage', whatsappMessage);

    try {
      const response = await axios.post('https://wongebackend.onrender.com/shops/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
      resetForm();
      fetchItems();
    } catch (error) {
      setSubmitError(error.message);
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setFile(null);
    setTypeOfProduct('');
    setPrice('');
    setWhatsappMessage('');
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading items...</p>;
  }

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Upload New Item</h2>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="description" style={labelStyle}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="photo" style={labelStyle}>Upload Photo:</label>
          <input type="file" id="photo" onChange={handleFileChange} style={fileInputStyle} />
          {uploading && <p style={statusStyle}>Uploading...</p>}
          {submitError && <p style={errorStyle}>Error: {submitError}</p>}
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="price" style={labelStyle}>Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="whatsappMessage" style={labelStyle}>Whatsapp Message:</label>
          <input
            type="text"
            id="whatsappMessage"
            value={whatsappMessage}
            onChange={handleWhatsappMessageChange}
            placeholder="Enter Whatsapp message"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Type:</label>
          <div style={radioGroupStyle}>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="type"
                value="Avon product"
                checked={typeOfProduct === 'Avon product'}
                onChange={handleTypeChange}
              />
              Avon
            </label>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="type"
                value="Jewelry"
                checked={typeOfProduct === 'Jewelry'}
                onChange={handleTypeChange}
              />
              Jewelry
            </label>
          </div>
        </div>
        <button type="submit" disabled={uploading} style={submitButtonStyle}>
          {uploading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '600px',
  marginTop:"100px",
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
  backgroundColor: '#f9f9f9',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const fileInputStyle = {
  padding: '10px',
};

const radioGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const radioLabelStyle = {
  marginBottom: '5px',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  fontSize: '16px',
  marginTop: '10px',
  transition: 'background-color 0.3s',
};

const submitButtonHoverStyle = {
  backgroundColor: '#45a049',
};

const itemListStyle = {
  marginTop: '30px',
};

const itemStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

const itemHeadingStyle = {
  margin: '0 0 10px 0',
  color: '#333',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '4px',
};

const priceStyle = {
  fontWeight: 'bold',
  color: '#4CAF50',
};

const statusStyle = {
  color: 'blue',
};

const errorStyle = {
  color: 'red',
};

export default UploadItems;