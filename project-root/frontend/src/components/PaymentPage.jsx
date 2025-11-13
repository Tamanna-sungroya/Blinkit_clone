import { useState } from "react";

const PaymentPage = () => {
  const [method, setMethod] = useState("razorpay");
  const subtotal = 120000;
  const delivery = 0;
  const total = subtotal + delivery;

  const handlePayment = () => {
    if (method === "razorpay") {
      const options = {
        key: "rzp_test_xxxxxxx", // Replace with your Razorpay key
        amount: total * 100, // Amount in paise
        currency: "INR",
        name: "My Store",
        description: "Test Transaction",
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6 text-center">💳 PAYMENT</h2>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Payment Method:</h3>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="payment"
              checked={method === "razorpay"}
              onChange={() => setMethod("razorpay")}
              className="mr-2"
            />
            Razorpay (UPI/Card/NetBanking)
          </label>
          <label className="flex items-center mb-2 text-gray-400">
            <input
              type="radio"
              name="payment"
              disabled
              className="mr-2"
            />
            Cash on Delivery (disabled if &gt; ₹10,000)
          </label>
        </div>

        {/* Order Summary */}
        <div className="mb-6 border-t pt-4">
          <h3 className="font-semibold mb-2">Order Summary:</h3>
          <p>Items: ₹{subtotal.toLocaleString()}</p>
          <p>Delivery: Free</p>
          <p className="font-bold">Payable: ₹{total.toLocaleString()}</p>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Pay Securely
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
