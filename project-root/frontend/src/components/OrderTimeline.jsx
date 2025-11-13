const OrderTimeline = ({ timeline }) => (
  <div className="p-3 border rounded-lg">
    <h3 className="font-semibold mb-2">Order Timeline</h3>
    <div className="flex flex-col space-y-2">
      {timeline.map((step, idx) => (
        <div key={idx}>
          {step.completed ? "✅" : "⏳"} {step.step}
        </div>
      ))}
    </div>
  </div>
);
export default OrderTimeline;
