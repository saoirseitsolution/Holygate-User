import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type DropdownItem = {
  label: string;
  onClick?: () => void;
  href?: string;
};

type DropdownProps = {
  items: DropdownItem[];
  label: string;
  icon?: ReactNode;
};

const Dropdown = ({ items, label, icon }: DropdownProps) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-900 text-sm font-medium transition-colors">
        {icon && <span className="inline-block  mr-2">{icon}</span>}
        <span className='tracking-wide font-light '>{label}</span>
        <ChevronDown className="w-4 h-4 mt-1" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={item.onClick}
            className={`block px-4 text-sm py-2  text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 first:rounded-t-md last:rounded-b-md transition-colors ${item.href ? '' : 'cursor-pointer'}`}
          >
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              item.label
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
