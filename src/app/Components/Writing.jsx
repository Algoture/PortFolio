import { writings } from "../Utils/Data";

const Writing = () => {
  const writingsByYear = writings.reduce((groups, item) => {
    const year = item.year || "Other";
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(item);
    return groups;
  }, {});

  const sortedYears = Object.keys(writingsByYear).sort((a, b) => b - a);

  return (
    <section className="w-full pt-10">
      <h2 className="text-[14px] text-neutral-500 dark:text-neutral-500 mb-4 select-none font-sans">
        Writing
      </h2>
      
      <div className="flex flex-col space-y-1">
        {sortedYears.map((year) => (
          <div key={year} className="contents">
            {writingsByYear[year].map((blog, index) => (
              <div
                key={blog.title}
                className="grid grid-cols-[3.5rem_1fr_3.5rem] md:grid-cols-[4.5rem_1fr_4rem] gap-x-4 items-baseline py-2.5 text-[14px] font-sans border-b border-neutral-50/50 dark:border-neutral-900/20"
              >
                <div className="text-neutral-400 dark:text-neutral-500 font-sans select-none">
                  {index === 0 ? year : ""}
                </div>

                <div className="flex items-center gap-2.5 min-w-0">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:underline hover:decoration-neutral-400 dark:hover:decoration-neutral-600 underline-offset-4 transition-colors truncate"
                  >
                    {blog.title}
                  </a>
                  {blog.isNew && (
                    <span className="inline-block text-[9px] font-bold text-accent dark:text-accent border border-accent/20 dark:border-accent/20 bg-accent/5 dark:bg-accent/5 rounded-full px-2 py-0.5 leading-none shrink-0 tracking-wide uppercase select-none">
                      New
                    </span>
                  )}
                </div>

                <div className="text-right text-neutral-400 dark:text-neutral-500 font-mono text-[13px] select-none">
                  {blog.date}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Writing;
