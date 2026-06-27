import { headerInfo, bioParagraphs } from "../Utils/Data";

const Hero = () => {
  return (
    <section className="flex flex-col pt-2 pb-4">
      <div className="flex flex-col mb-2">
        <img
          src="/Me.png"
          alt={headerInfo.name}
          className="size-20 bg-zinc-100 dark:bg-zinc-800 rounded-full object-cover mb-4 select-none pointer-events-none"
        />
        <h1 className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
          {headerInfo.name}
        </h1>
        <p className="text-[14px] text-neutral-400 dark:text-neutral-500 font-sans">
          {headerInfo.role}
        </p>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-2 text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
        {bioParagraphs.map((para, i) => (
          <p key={i}>
            {para.map((chunk, j) => {
              if (chunk.href) {
                return (
                  <a
                    key={j}
                    href={chunk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 hover:decoration-accent dark:hover:decoration-accent transition-colors"
                  >
                    {chunk.text}
                  </a>
                );
              }
              return <span key={j}>{chunk.text}</span>;
            })}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hero;
