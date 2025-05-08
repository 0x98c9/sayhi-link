/**
 * Formats a phone number by removing non-numeric characters
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/\D/g, '');
};

/**
 * Encodes a message for use in a URL
 */
export const encodeMessage = (message: string): string => {
  return encodeURIComponent(message);
};

/**
 * Generates a WhatsApp link based on phone number and message
 */
export const generateWhatsAppLink = (countryCode: string, phoneNumber: string, message: string): string => {
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeMessage(message);
  
  // WhatsApp API format: https://wa.me/{phone}?text={encodedMessage}
  return `https://wa.me/${countryCode}${formattedPhone}?text=${encodedMessage}`;
};

/**
 * Copies text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy: ', error);
    return false;
  }
};

/**
 * Default message templates
 */
export const defaultTemplates = [
  {
    id: '1',
    name: '👋 Friendly Greeting',
    content: 'Hi there! 👋\nThank you for reaching out! How can I help you today? 😊'
  },
  {
    id: '2',
    name: '📅 Meeting Request',
    content: 'Hello! 👋\n\nI would like to schedule a meeting to discuss our collaboration. Here are some proposed times:\n\n📅 Tomorrow at 2 PM\n📅 Thursday at 10 AM\n📅 Friday at 3 PM\n\nPlease let me know which time works best for you! 🤝'
  },
  {
    id: '3',
    name: '🙏 Thank You Note',
    content: 'Dear valued customer,\n\nThank you so much for your business! 🙏✨ We truly appreciate your trust in our services.\n\nIf you have any questions or need further assistance, please don\'t hesitate to reach out! 😊\n\nBest regards,\n[Your Name] 🌟'
  },
  {
    id: '4',
    name: '📝 Follow-Up',
    content: 'Hi! 👋\n\nI hope this message finds you well! I\'m following up on our previous conversation regarding [topic]. Have you had a chance to review the information? 📋\n\nI\'m happy to answer any questions you might have! 😊\n\nLooking forward to your response! 🤝'
  },
  {
    id: '5',
    name: '🛍️ Order Confirmation',
    content: 'Thank you for your order! 🎉\n\nOrder #: [Order Number]\nEstimated Delivery: [Date] 📦\n\nWe\'ll notify you once your order ships! 🚚✨\n\nNeed help? Feel free to reply to this message! 💬'
  },
  {
    id: '6',
    name: '💼 Business Inquiry',
    content: 'Dear [Name],\n\nI hope this message finds you well! 👋\n\nI came across your business and would love to discuss potential collaboration opportunities. Our services include:\n\n✨ [Service 1]\n✨ [Service 2]\n✨ [Service 3]\n\nWould you be interested in scheduling a brief call to discuss this further? 🤝\n\nBest regards,\n[Your Name] 📱'
  },
  {
    id: '7',
    name: '🎉 Event Invitation',
    content: 'You\'re Invited! 🎉\n\n🗓️ Event: [Event Name]\n📅 Date: [Date]\n⏰ Time: [Time]\n📍 Location: [Location]\n\nWe would be delighted to have you join us! Please RSVP by replying to this message. 🤗\n\nFeel free to ask any questions! 💬'
  },
  {
    id: '8',
    name: '🎯 Appointment Reminder',
    content: 'Friendly Reminder! ⏰\n\nYour appointment is scheduled for:\n📅 [Date]\n⏰ [Time]\n\nPlease arrive 5 minutes early. If you need to reschedule, let us know 24 hours in advance.\n\nSee you soon! 👋'
  }
];