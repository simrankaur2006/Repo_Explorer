import './FilterInput.css';

export default function FilterInput({ value, onChange }) {
  return (
    <input
      className="filter-input"
      type="text"
      placeholder="Filter loaded repos by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
