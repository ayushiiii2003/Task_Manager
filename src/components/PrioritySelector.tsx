import type { ChangeEvent } from 'react';

interface PrioritySelectorProps {
  priority: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function PrioritySelector({ priority, onChange }: PrioritySelectorProps) {
  return (
    <select value={priority} onChange={onChange}>
      <option value='low'>Low</option>
      <option value='medium'>Medium</option>
      <option value='high'>High</option>
    </select>
  );
}

export default PrioritySelector;