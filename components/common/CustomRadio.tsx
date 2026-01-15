const CustomRadio = ({ label, name, checked=false } : { label: string, name: string, checked?: boolean }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${checked ? 'border-[#3F37C9] bg-white' : 'border-gray-300'}`}>
      {checked && <div className="w-2 h-2 rounded-full bg-[#1A1C21]" />}
    </div>
    <span className="text-[11px] font-medium text-[#1A1C21]">{label}</span>
  </label>
);

export default CustomRadio;