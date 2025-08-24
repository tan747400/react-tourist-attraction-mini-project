export default function SearchBar({
    inputRef,
    value,
    onChange,
    label,
    placeholder,
  }) {
    return (
      <>
        <label className="block w-full max-w-6xl mx-auto text-gray-700 text-base mb-2 text-left">
          {label}
        </label>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block w-full max-w-6xl mx-auto p-3 border-b-2 border-gray-400 placeholder:text-center text-left"
        />
      </>
    );
  }
  