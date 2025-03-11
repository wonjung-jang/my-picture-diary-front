interface SpinnerProps {
  size?: number;
  color?: string;
}

export function Spinner({ size = 4, color = "white" }: SpinnerProps) {
  return (
    <span
      className={`bg-transparent w-${size} h-${size} rounded-full border-2 border-solid border-t-${color} border-b-transparent border-l-${color} border-r-${color} inline-block animate-spin`}
    />
  );
}
