import nodemailer from 'nodemailer';

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

export const sendNotification = async (lead) => {
  try {
    const transporter = createTransporter();
    if (!transporter) return;

    // 1. 🔔 Admin Alert
    const adminOptions = {
      from: `"Bizzybee Alert" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔥 HOT LEAD: ${lead.name} (${lead.businessType})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6C63FF;">New Growth Audit Request</h2>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Phone:</strong> ${lead.phone}</p>
          <p><strong>Industry:</strong> ${lead.businessType}</p>
          <p><strong>Message:</strong> ${lead.message || 'N/A'}</p>
          <hr />
          <p>View details in <a href="${process.env.FRONTEND_URL}/admin">Admin Dashboard</a></p>
        </div>
      `
    };

    await transporter.sendMail(adminOptions);

    // 2. 📧 User Response (Auto-Reply)
    const userOptions = {
      from: `"Bizzybee Technology" <${process.env.EMAIL_USER}>`,
      to: lead.email,
      subject: `Your AI Growth Audit is Underway 🚀`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 20px; overflow: hidden;">
          <div style="background: #000; padding: 40px; text-align: center;">
            <h1 style="color: #6C63FF; margin: 0;">Bizzybee</h1>
            <p style="color: #fff; opacity: 0.7; margin-top: 10px;">Growth Lab & AI Systems</p>
          </div>
          <div style="padding: 40px;">
            <h2 style="color: #333;">Hi ${lead.name},</h2>
            <p style="color: #555; line-height: 1.6;">Our AI engine has started analyzing your business profile for <strong>${lead.businessType}</strong>. We are currently mapping out hidden revenue opportunities and AI automation bottlenecks in your current funnel.</p>
            
            <div style="background: #f8f9ff; padding: 25px; border-radius: 15px; margin: 30px 0;">
              <h3 style="color: #6C63FF; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555; margin-bottom: 0;">
                <li>AI Data Crunching (20-30 mins)</li>
                <li>Strategy Roadmap Generation</li>
                <li>Manual Expert Review</li>
              </ul>
            </div>

            <p style="color: #555;">You will receive your full <strong>PDF Growth Roadmap</strong> via this email shortly. If you have immediate questions, feel free to reply to this email or reach us on WhatsApp.</p>
            
            <a href="https://wa.me/917845994734" style="display: inline-block; background: #6C63FF; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 100px; font-weight: bold; margin-top: 20px;">Chat on WhatsApp</a>
          </div>
          <div style="background: #f4f4f4; padding: 20px; text-align: center; color: #999; font-size: 12px;">
            © 2026 Bizzybee Technology. All rights reserved. <br />
            Madurantakam, Tamil Nadu, India.
          </div>
        </div>
      `
    };

    await transporter.sendMail(userOptions);
    console.log('Admin and User notifications sent');
    
  } catch (error) {
    console.error('Notification error:', error);
  }
};
