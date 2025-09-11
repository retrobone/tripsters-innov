import { cn } from "@/lib/utils";

const PlaneLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse text-primary"
        style={{
          animation: 'fly 1.5s ease-in-out infinite',
        }}
      >
        <path
          d="M2.5 10.5l8-4v10l-8-4zM13.5 6.5v10l8-4-8-6z"
          fill="currentColor"
        />
        <style>{`
          @keyframes fly {
            0% { transform: translateY(5px) rotate(5deg); }
            50% { transform: translateY(-5px) rotate(-5deg); }
            100% { transform: translateY(5px) rotate(5deg); }
          }
        `}</style>
      </svg>
      <p className="text-muted-foreground">Planning your adventure...</p>
    </div>
  );
};

export default PlaneLoader;
