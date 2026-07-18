const Ticket = require("../models/Ticket");
const { triageTicket } = require("../services/aiService");

const createTicket = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // AI Triage
    const aiResult = await triageTicket(message);

    const ticket = await Ticket.create({
      name,
      email,
      message,
      priority: aiResult.data.priority,
      category: aiResult.data.category,
      suggestedReply: aiResult.data.suggestedReply,
      aiStatus: aiResult.success ? "SUCCESS" : "FAILED",
    });

    res.status(201).json({
      success: true,
      message: "Ticket submitted successfully",
      data: ticket,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createTicket,
};