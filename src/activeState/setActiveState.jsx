import { useEffect, useState } from 'react';

export default function setActiveState() {
  const [active, setActive] = useState(localStorage.active);

  useEffect(() => {
    localStorage.setItem('active', active);
  }, [active]);

  return [active];
}
