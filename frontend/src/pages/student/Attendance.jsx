import React, { useState, useRef, useEffect } from 'react';
import ViewDetails from '../../components/student/assignments/ViewDeatils';

const Attendance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const content = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  `;

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    // <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
    //   <div
    //     ref={contentRef}
    //     className="overflow-hidden transition-all duration-500 ease-in-out"
    //     style={{ maxHeight }}
    //   >
    //     <p className="text-gray-700">{content}</p>
    //   </div>
    //   <button
    //     onClick={() => setIsOpen(!isOpen)}
    //     className="mt-3 text-blue-500 font-medium hover:underline"
    //   >
    //     {isOpen ? 'View Less' : 'View More'}
    //   </button>
    // </div>
    <>
      <ViewDetails/>
    </>
  );
};

export default Attendance;
