import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

export default async function NewHeader() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
      <div className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
        <nav>
          <ul>
            <Link
              href={"/portfolio-v1/homepage"}
              aria-label="Home Page"
              className="text-white"
            >
              {settings.data.name}
            </Link>
            {settings.data.nav_item.map(({ link, label }, index) => {
              // Modify the link object to include the desired path
              const modifiedLink = {
                ...link,
                url: `/portfolio-v1${link.url}`,
              };

              return (
                <li key={index} className="text-white">
                  <PrismicNextLink field={modifiedLink}>
                    {label}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
