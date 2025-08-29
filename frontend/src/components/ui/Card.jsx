export function Card({ className, children }) {
  return (
    <div className={`bg-white rounded-xl  shadow ${className}`}>{children}</div>
  );
}

export function CardContent({ className, children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
