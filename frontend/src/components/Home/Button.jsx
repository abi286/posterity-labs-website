
export const Button = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-sm p-[2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#000_50%,#FFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 py-4 px-6 text-base font-normal text-white backdrop-blur-3xl">
        Get Started
      </span>
    </button>
  );
};
