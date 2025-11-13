import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SupportPage.css";

const SupportPage = () => {
  const navigate = useNavigate();

  // Dummy order history (future mein API se fetch kar sakte ho)
  const orderHistory = [
    {
      id: "111111",
      status: "Delivered",
      date: "05 Aug 25",
      items: [{ name: "iPhone 15 Pro", qty: 1, price: "₹145000" }],
    },
    {
      id: "123456",
      status: "Delivered",
      date: "12 Aug 25",
      items: [{ name: "Laptop", qty: 1, price: "₹120000" }],
    },
  ];

  // ✅ Sirf last order show karo
  const latestOrder = orderHistory[orderHistory.length - 1];

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Hello! 👋 I see your last order ID is #${latestOrder.id} (${latestOrder.status}) - ${latestOrder.items[0].name}. How can I help you today?`,
    },
  ]);

  const [input, setInput] = useState("");
  const [concern, setConcern] = useState("");

  const handleSend = () => {
    if (!input.trim() && !concern) return;

    let userMessage = input.trim();
    let isConcern = false;

    if (concern) {
      userMessage = `I have an issue regarding: ${concern}`;
      setConcern("");
      isConcern = true;
    }

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);

    // Bot reply after delay
    setTimeout(() => {
      if (isConcern) {
        // ✅ Concern specific reply (order info ke sath)
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: `Thanks for reaching out! ✅ We’ve logged your concern regarding Order #${latestOrder.id} (${latestOrder.items[0].name}). Our support team will get back to you shortly.`,
          },
        ]);
      } else {
        // ✅ Generic reply (order repeat nahi hoga)
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Got it 👍 Our support team is reviewing your query. You'll hear from us soon!",
          },
        ]);
      }
    }, 1000);

    setInput("");
  };

  return (
    <div className="support-page">
      <h1>Help & Support</h1>
      <p className="order-summary">
        <strong>Order ID:</strong> #{latestOrder.id} |{" "}
        <strong>Status:</strong> {latestOrder.status} |{" "}
        <strong>Date:</strong> {latestOrder.date}
      </p>

      {/* Concerns Dropdown */}
      <div className="dropdown-wrapper">
        <label>Select Concern: </label>
        <select
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
        >
          <option value="">-- Choose an option --</option>
          <option value="Order not delivered">Order not delivered</option>
          <option value="Wrong product received">Wrong product received</option>
          <option value="Payment issue">Payment issue</option>
          <option value="Return/Refund">Return/Refund</option>
        </select>
        <button onClick={handleSend}>Submit</button>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={400}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default SupportPage;