import axios from 'axios';

const testEndpoint = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/ai/voice', {
      message: 'test',
      businessType: 'test'
    });
    console.log('Success:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
    if (err.response) {
      console.error('Response Data:', err.response.data);
      console.error('Response Status:', err.response.status);
    }
  }
};

testEndpoint();
