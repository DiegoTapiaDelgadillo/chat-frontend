export default function Input({ placeholder, type }) {
  return (
    <div className=" pb-4">
      <input
        className=" w-full border border-black rounded-2xl p-4 shadow-2xl"
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
