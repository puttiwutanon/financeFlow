import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get all conversations for a user
router.get('/:userId/conversations', async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) {
      return res.json({ conversations: [] });
    }
    res.json({ conversations: user.conversations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new conversation
router.post('/:userId/conversations', async (req, res) => {
  try {
    let user = await User.findOne({ userId: req.params.userId });
    
    if (!user) {
      // Create new user if doesn't exist
      user = new User({ 
        userId: req.params.userId,
        email: req.body.email,
        conversations: []
      });
    }

    const newConversation = {
      title: req.body.title || 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    user.conversations.push(newConversation);
    await user.save();

    res.json({ 
      conversation: user.conversations[user.conversations.length - 1]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add message to conversation
router.post('/:userId/conversations/:conversationId/messages', async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const conversation = user.conversations.id(req.params.conversationId);
    
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    conversation.messages.push({
      text: req.body.text,
      sender: req.body.sender, // 'user' or 'bot'
      timestamp: new Date()
    });

    conversation.updatedAt = new Date();
    await user.save();

    res.json({ conversation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete conversation
router.delete('/:userId/conversations/:conversationId', async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.conversations.id(req.params.conversationId).remove();
    await user.save();

    res.json({ message: 'Conversation deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;