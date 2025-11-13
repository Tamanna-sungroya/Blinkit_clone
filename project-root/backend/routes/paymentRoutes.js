// import axios from "axios";

// const PaymentPage = () => {
//   const handlePayment = async () => {
//     try {
//       // 1️⃣ Call backend to create an order
//       const { data } = await axios.post("http://localhost:5000/api/payment/order", {
//         amount: 500, // Rs.500
//       });

//       // 2️⃣ Load Razorpay script
//       const options = {
//         key: rzp_test_R7Uel8ZLxHMEv9, // frontend only needs public key
//         amount: data.amount,
//         currency: data.currency,
//         name: "Your Shop Name",
//         description: "Test Transaction",
//         order_id: data.id, // Razorpay order_id from backend
//         handler: function (response) {
//           alert("Payment successful!");
//           console.log(response);
//         },
//         prefill: {
//           name: "User Name",
//           email: "user@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed to start!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <button
//         onClick={handlePayment}
//         className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;
