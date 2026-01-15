const FloatingInput = ({ label, type = "text", placeholder } : { label: string, type?: string, placeholder: string }) => (
  <div className="flex flex-col gap-2 w-full border-b border-gray-200 py-2 focus-within:border-[#3F37C9] transition-colors">
    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="bg-transparent outline-none text-sm font-medium text-[#1A1C21] placeholder:text-gray-300"
    />
  </div>
);

export default FloatingInput;