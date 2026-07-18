const Ticket = require("../models/Ticket");

const getTickets = async (req, res) => {
  try {
    const {
      priority,
      category,
      search,
      sort = "newest",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    if (priority) {
      query.priority = priority;
    }

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    const tickets = await Ticket.find(query)
      .select("-__v")
      .sort({
        createdAt: sort === "oldest" ? 1 : -1,
      })
      .skip((page - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Ticket.countDocuments(query);

    res.json({
      success: true,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      data: tickets,
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
  getTickets,
};