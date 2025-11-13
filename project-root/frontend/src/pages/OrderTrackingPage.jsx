import React, { useEffect, useState, useCallback } from "react";
import StatusCard from "../components/StatusCard";
import "./OrderTrackingPage.css";

// ✅ Utility function to generate random numeric Order ID
const generateOrderId = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
};

// ✅ Utility function to generate random phone number
const generatePhoneNumber = () => {
  const prefix = "+91";
  const number = Math.floor(6000000000 + Math.random() * 3999999999);
  return `${prefix} ${number}`;
};

const partnersList = [
  "Rahul Kumar",
  "Aman Verma",
  "Priya Singh",
  "Rohit Sharma",
  "Neha Gupta",
  "Arjun Mehta",
  "Simran Kaur",
];

const OrderTrackingPage = () => {
  const [partner, setPartner] = useState({ name: "", phone: "", isActive: false });
  const [searching, setSearching] = useState(true);
  const [busyState, setBusyState] = useState(false); //track busy message

  const [order, setOrder] = useState({
    id: `#${generateOrderId()}`, //Random Order ID
    status: "Order Placed",
    eta: Date.now() + 25 * 60 * 1000,
    timeline: [
      { step: "Order Placed", completed: true },
      { step: "Partner Assigned", completed: false },
      { step: "Out for Delivery", completed: false },
      { step: "Delivered", completed: false },
    ],
  });

  const [countdown, setCountdown] = useState(25 * 60);

  // ✅ Function to assign partner
  const assignPartner = useCallback(() => {
    const randomName =
      partnersList[Math.floor(Math.random() * partnersList.length)];
    const phone = generatePhoneNumber(); // generate random phone
    setPartner({ name: randomName, phone, isActive: true });
    setSearching(false);
    setBusyState(false);
    updateStep("Partner Assigned");
  }, []);

  // ✅ Simulate sequential step changes
  useEffect(() => {
    // Pehle searching
    setSearching(true);
    setBusyState(false);

    // 2.5s baad decide hoga busy hai ya assign
    const partnerTimer = setTimeout(() => {
      const isBusy = Math.random() < 0.5; // 50% chance busy

      if (isBusy) {
        // Show busy message
        setBusyState(true);

        // 5s baad assign karna
        setTimeout(() => {
          assignPartner();
        }, 5000);
      } else {
        // Direct assign ho jaaye
        assignPartner();
      }
    }, 2500);

    // 2) Out for delivery after 10s
    const outForDeliveryTimer = setTimeout(() => {
      updateStep("Out for Delivery");
    }, 10000);

    // 3) Delivered after 20s
    const deliveredTimer = setTimeout(() => {
      updateStep("Delivered");
    }, 20000);

    return () => {
      clearTimeout(partnerTimer);
      clearTimeout(outForDeliveryTimer);
      clearTimeout(deliveredTimer);
    };
  }, [assignPartner]);

  // ✅ Update timeline state
  const updateStep = (nextStep) => {
    setOrder((prev) => {
      const updatedTimeline = prev.timeline.map((s) =>
        s.step === nextStep ? { ...s, completed: true } : s
      );
      return { ...prev, status: nextStep, timeline: updatedTimeline };
    });
  };

  // ✅ Countdown
  useEffect(() => {
    if (order.status === "Delivered") return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [order.status]);

  // ✅ Progress bar calculation
  const progress =
    ((order.timeline.filter((s) => s.completed).length - 1) /
      (order.timeline.length - 1)) *
    100;

  return (
    <div className="order-tracking-shell">
      <h1 className="order-title">📦 Order Status</h1>

      {/* Order ID */}
      <div className="partner-line">
        <span>Order ID: {order.id}</span>
      </div>

      {/* Partner Info */}
      {searching ? (
        busyState ? (
          <div className="partner-line">
            <span className="partner-badge searching">
              🚨 All delivery partners are busy. Please wait...
            </span>
          </div>
        ) : (
          <div className="partner-line">
            <span className="partner-badge searching">
              🔍 Searching for a delivery partner...
            </span>
          </div>
        )
      ) : (
        <div className="partner-line">
          <span>
            Delivery Partner: {partner.name}{" "}
            {partner.phone && `(${partner.phone})`}
          </span>
          <span>Status: {order.status}</span>
        </div>
      )}

      {/* ETA + Status */}
      <div className="eta-card">
        {/* <StatusCard status={order.status} /> */}
        <span className="eta-chip">
          ETA: {Math.floor(countdown / 60)}:
          {String(countdown % 60).padStart(2, "0")}
        </span>
      </div>

      {/* Custom Horizontal Timeline */}
      <div
        className="timeline-horizontal"
        style={{ "--progress": `${Math.round(progress) || 0}%` }}
      >
        <div className="track">
          <div className="progress"></div>
        </div>

        <div className="steps">
          {order.timeline.map((t, i) => {
            const isDone = t.completed;
            const isActive =
              !t.completed && (order.timeline[i - 1]?.completed ?? false);
            return (
              <div
                key={i}
                className={`step ${isDone ? "done" : ""} ${
                  isActive ? "active" : ""
                }`}
              >
                <div className="dot" />
                <div className="label">{t.step}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;