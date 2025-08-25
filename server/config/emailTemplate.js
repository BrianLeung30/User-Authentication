export const WELCOME_TEMPLATE = (name) => `
  <div style="font-family: Arial, sans-serif; padding: 24px;">
    <h2 style="color: #4F46E5;">Welcome to AI Calorie Tracker, ${name}!</h2>
    <p>We're excited to have you on board. Start tracking your calories and reach your health goals with ease.</p>
    <br>
    <p>Happy tracking!<br>AI Calorie Tracker Team</p>
  </div>
`;

export const EMAIL_VERIFY_TEMPLATE = (otp) => `
  <div style="font-family: Arial, sans-serif; padding: 24px;">
    <h2 style="color: #4F46E5;">Verify Your Email</h2>
    <p>Thank you for signing up! Please use the following One-Time Password (OTP) to verify your email address:</p>
    <div style="font-size: 2em; font-weight: bold; letter-spacing: 8px; margin: 24px 0; color: #6366F1;">
      ${otp}
    </div>
    <p>This code will expire in 15 minutes. If you did not request this, please ignore this email.</p>
    <br>
    <p>Best regards,<br>AI Calorie Tracker Team</p>
  </div>
`;

export const PASSWORD_RESET_TEMPLATE = (otp) => `
  <div style="font-family: Arial, sans-serif; padding: 24px;">
    <h2 style="color: #4F46E5;">Password Reset Request</h2>
    <p>We received a request to reset your password for your AI Calorie Tracker account.</p>
    <p>Please use the following One-Time Password (OTP) to reset your password:</p>
    <div style="font-size: 2em; font-weight: bold; letter-spacing: 8px; margin: 24px 0; color: #6366F1;">
      ${otp}
    </div>
    <p>This code will expire in 15 minutes. If you did not request a password reset, please ignore this email.</p>
    <br>
    <p>Best regards,<br>AI Calorie Tracker Team</p>
  </div>
`;
