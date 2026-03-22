"use client";

import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-05-23T00:00:00.000-03:00");

const UNIT_SECONDS = {
  days: 24 * 60 * 60,
  hours: 60 * 60,
  minutes: 60,
};

function formatUnit(value: number) {
  return String(Math.max(value, 0)).padStart(2, "0");
}

export function EventCountdown() {
  const [seconds, setSeconds] = useState(() =>
    differenceInSeconds(EVENT_DATE, new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(differenceInSeconds(EVENT_DATE, new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(seconds / UNIT_SECONDS.days);
  const hours = Math.floor((seconds % UNIT_SECONDS.days) / UNIT_SECONDS.hours);
  const minutes = Math.floor(
    (seconds % UNIT_SECONDS.hours) / UNIT_SECONDS.minutes,
  );
  const secs = Math.floor(seconds % UNIT_SECONDS.minutes);

  const units = [
    { label: "DIAS", value: days },
    { label: "HORAS", value: hours },
    { label: "MIN", value: minutes },
    { label: "SEG", value: secs },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-md border border-theme-border bg-zinc-950/80 px-2 py-3 text-center"
        >
          <p className="font-heading text-2xl leading-none sm:text-4xl">
            {formatUnit(unit.value)}
          </p>
          <p className="mt-1 text-[10px] font-medium tracking-[0.18em] text-theme-primary sm:text-xs">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
