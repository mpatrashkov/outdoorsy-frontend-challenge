export interface InputProps {
  value?: string;
  onChange?(newValue: string): void;
}

export function Input(props: InputProps) {
  return (
    <div>
      <input
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        className="rounded-md border-2 border-gray-400 p-3 w-full"
      />
    </div>
  );
}
