import React from 'react';

const IconMap = ({fill,size} : {fill ?: string, size ?: number}) => {
  return (
   <svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9994 15.6687C16.0097 15.6687 17.6394 14.039 17.6394 12.0287C17.6394 10.0184 16.0097 8.38867 13.9994 8.38867C11.9891 8.38867 10.3594 10.0184 10.3594 12.0287C10.3594 14.039 11.9891 15.6687 13.9994 15.6687Z" stroke={fill ? fill : '#2E2773'} strokeWidth="1.5"/>
<path d="M4.22267 9.90468C6.521 -0.198656 21.4893 -0.186989 23.776 9.91634C25.1177 15.843 21.431 20.8597 18.1993 23.963C15.8543 26.2263 12.1443 26.2263 9.78767 23.963C6.56767 20.8597 2.881 15.8313 4.22267 9.90468Z" stroke={fill ? fill : '#2E2773'} strokeWidth="1.5"/>
</svg>
  );
};

export default IconMap;