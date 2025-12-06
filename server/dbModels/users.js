import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: String, enum: ['user', 'bot'], required: true },
  timestamp: { type: Date, default: Date.now }
});

const conversationSchema = new mongoose.Schema({
  title: { type: String, default: 'New Chat' },
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Firebase UID
  email: String,
  conversations: [conversationSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);