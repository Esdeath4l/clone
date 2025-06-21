'use client';

import { useRef } from 'react';
import FocusedSegments from './FocusedSegments';
import B2C from './B2C';
import B2B from './B2B';
import CountUpComponent from './CountUp';
export default function ParentFocusedSegments() {
  const b2cRef = useRef(null);
  const b2bRef = useRef(null);
  return (
    <div>
      <FocusedSegments b2cRef={b2cRef} b2bRef={b2bRef}/>
      <div ref={b2cRef}>
        <B2C />
      </div>
      <div ref={b2bRef}>
        <CountUpComponent />
      </div>
      <div ref={b2bRef}>
        <B2B />
      </div>
    
    </div>
  );
}