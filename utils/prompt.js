const buildPrompt = (message) => `
You are a customer support triage assistant.

Analyze the support ticket below.

Return ONLY valid JSON in this exact format:

{
  "priority": "Low | Medium | High",
  "category": "Billing | Bug | Feature Request | Other",
  "suggestedReply": "One short professional reply"
}

Support Ticket:
${message}
`;

module.exports = buildPrompt;