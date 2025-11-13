const OrderHeader = ({ orderId, partner }) => (
  <div className="mb-4">
    <p><strong>Order ID:</strong> {orderId}</p>
    <p><strong>Delivery Partner:</strong> {partner.name} 🚴</p>
  </div>
);
export default OrderHeader;