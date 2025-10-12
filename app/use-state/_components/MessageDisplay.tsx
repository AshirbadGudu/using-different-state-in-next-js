interface MessageDisplayProps {
  message: string;
}

export function MessageDisplay({ message }: MessageDisplayProps) {
  return <h1 className="text-2xl mb-4">{message}</h1>;
}
