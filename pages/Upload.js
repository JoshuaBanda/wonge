import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/Inventory.module.css';

export default function InventoryForm() {
  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Submit form handler
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Upload the image
      const formData = new FormData();
      formData.append('file', data.photo[0]);

      const imageResponse = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { url, public_id } = imageResponse.data;

      // Add photo_url and photo_public_id to the inventory data
      const inventoryData = {
        description: data.description,
        photo_url: url,
        photo_public_id: public_id,
        user_id: 1, // Replace with actual user id
      };

      // Send the data to your backend (use an API endpoint to insert into DB)
      await axios.post('/api/inventory', inventoryData);

      setIsLoading(false);
      reset(); // Reset the form
      alert('Inventory added successfully');
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error);
      alert('Failed to upload inventory');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add New Inventory</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register('description', { required: true })}
            placeholder="Enter description"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="photo">Upload Image</label>
          <input
            type="file"
            id="photo"
            {...register('photo', { required: true })}
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Image Preview" className={styles.imagePreview} />}
        </div>

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Add Inventory'}
        </button>
      </form>
    </div>
  );
}
