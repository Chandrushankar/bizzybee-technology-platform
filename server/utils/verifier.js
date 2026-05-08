import axios from 'axios';

/**
 * Verifies an email address using a combination of regex and (optionally) an external API.
 */
export const verifyEmail = async (email) => {
  // 1. Basic Regex Check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { valid: false, reason: 'Invalid format' };

  // 2. Disposable Email Check (Basic list)
  const disposableDomains = ['mailinator.com', 'tempmail.com', '10minutemail.com'];
  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) return { valid: false, reason: 'Disposable email not allowed' };

  // 3. Integration with ZeroBounce (Placeholder - if key exists)
  if (process.env.ZEROBOUNCE_API_KEY) {
    try {
      const response = await axios.get(`https://api.zerobounce.net/v2/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${email}`);
      return { 
        valid: response.data.status === 'valid', 
        reason: response.data.status,
        score: response.data.score
      };
    } catch (error) {
      console.error('ZeroBounce Error:', error.message);
    }
  }

  return { valid: true, reason: 'Passed basic checks' };
};

/**
 * Verifies a phone number.
 */
export const verifyPhone = async (phone) => {
  // Basic check for international format (e.g., +1234567890)
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) return { valid: false, reason: 'Invalid phone format' };

  // Integration with Twilio Lookup (Placeholder - if keys exist)
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    // Note: This requires 'twilio' package, but we can use axios for simplicity
    try {
      const auth = Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64');
      const response = await axios.get(`https://lookups.twilio.com/v1/PhoneNumbers/${phone}`, {
        headers: { Authorization: `Basic ${auth}` }
      });
      return { valid: true, carrier: response.data.carrier };
    } catch (error) {
      console.error('Twilio Error:', error.message);
    }
  }

  return { valid: true, reason: 'Passed basic checks' };
};
