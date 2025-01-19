import * as React from "react";

export function OutClassProject({ image, title, description }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <article className="flex flex-col grow px-2.5 py-3 w-full rounded-lg bg-neutral-900 max-md:mt-6 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          className="object-contain w-full rounded-lg aspect-[2.54] max-md:max-w-full"
          alt={title}
        />
        <h3 className="self-start mt-6 text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-4 mr-9 text-sm leading-5 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
          {description}
        </p>
      </article>
    </div>
  );
}
