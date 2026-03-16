interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`flex flex-col w-full max-w-5xl mx-auto items-center justify-center p-2.5 mt-25 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
