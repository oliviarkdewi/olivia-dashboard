"use client";

import { useState } from "react";
import type { FocusItem } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";
import { SampleDataTag } from "./ui/SampleDataTag";

interface FocusCardProps {
  items: FocusItem[];
}

export function FocusCard({ items: initialItems }: FocusCardProps) {
  const [items, setItems] = useState(initialItems);

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)),
    );
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader title="Today's focus" eyebrow="Priorities" right={<SampleDataTag />} />
      <ul className="flex flex-1 flex-col justify-center gap-3">
        {items.slice(0, 6).map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center gap-3 text-left"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  item.done
                    ? "border-moss bg-moss"
                    : "border-line bg-paper"
                }`}
              >
                {item.done && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5L6.2 11.5L13 4.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className={`text-sm ${
                  item.done ? "text-ink-soft line-through" : "text-ink"
                }`}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
