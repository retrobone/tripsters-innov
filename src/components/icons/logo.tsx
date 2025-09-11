import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-xl", className)}>
       <svg
        width="32"
        height="32"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="58" stroke="#1E3A8A" strokeWidth="4" />
        <path
          d="M29.5 88C33.6667 82.5 45.5 70.5 50 69.5"
          stroke="#84CC16"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M93 57C89.5 63.5 75.6 78.4 71.5 79.5"
          stroke="#84CC16"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M90 42C80.8333 46.1667 65.6 54.3 60.5 56"
          stroke="#0FB9B1"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M49 32C52.5 37.5 63.9 50.4 68.5 51.5"
          stroke="#0FB9B1"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M34 50C42.8333 45.5 57.2 37.1 62.5 35"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M78.5 28.5C76.1667 31.5 69.1 39.1 67.5 41"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M84.3431 36.3431L89.6568 31.0294M93.8995 35.2721L88.5858 39.9858"
          stroke="#1E3A8A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M89.2426 31.435L92.071 28.6066L95 31.5355L92.1715 34.364L89.2426 31.435Z"
          fill="#1E3A8A"
        />
        <path
          d="M48.5 98C48.5 94.6667 50.3 88.6 52.5 87C54.7 85.4 58.5 86.5 58.5 86.5L59 93L53 98.5L48.5 98Z"
          fill="#84CC16"
        />
        <path
          d="M39 98.5C39 95.1667 40.8 89.1 43 87.5C45.2 85.9 49 87 49 87L49.5 93.5L43.5 99L39 98.5Z"
          fill="#84CC16"
        />
        <path
          d="M88 88L90.5 85.5L93 88L90.5 90.5L88 88Z"
          fill="#1E3A8A"
          stroke="#84CC16"
          strokeWidth="1.5"
        />
        <path
          d="M90.5 88L93 85.5M90.5 88L93 90.5M90.5 88L88 90.5M90.5 88L88 85.5"
          stroke="#1E3A8A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <span className="font-headline text-2xl" style={{color: '#1E3A8A'}}>
            Trip<span style={{color: '#F97316'}}>s</span>ters
        </span>
      </svg>
      <span className="font-headline">Tripsters</span>
    </div>
  );
};

export default Logo;
