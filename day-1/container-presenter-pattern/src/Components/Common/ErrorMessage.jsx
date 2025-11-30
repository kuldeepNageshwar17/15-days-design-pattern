/* eslint-disable react/prop-types */

export default function ErrorMessage({ message, onRefreshData }) {
  return (
    <div className="error-container">
      <p>{message}</p>
      <button onClick={onRefreshData}>Try Again</button>
    </div>
  );
}
