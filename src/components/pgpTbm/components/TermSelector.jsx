import * as React from "react";

export function TermSelector({ terms }) {
  return (
    <nav
      className="flex flex-wrap gap-10 py-5 pr-20 mt-10 text-xs font-medium bg-stone-900 max-md:pr-5 max-md:max-w-full"
      role="navigation"
      aria-label="Term selection"
    >
      {terms.map((term, index) => (
        <button
          key={index}
          className={`${
            index === 0 ? "font-semibold text-white" : "text-neutral-400"
          }`}
          aria-current={index === 0 ? "page" : undefined}
        >
          {term}
        </button>
      ))}
    </nav>
  );
}
