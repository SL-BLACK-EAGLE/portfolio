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
              href={"/homepage"}
              aria-label="Home Page"
              className="text-white"
            >
              {settings.data.name}
            </Link>
            {settings.data.nav_item.map(({ link, label }, index) => (
              <li key={index} className="text-white">
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
