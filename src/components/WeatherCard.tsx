import type { WeatherData } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";

function iconFor(code: number): string {
  if (code === 0 || code === 1) return "☀️";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 65) return "🌧️";
  if (code >= 71 && code <= 75) return "❄️";
  if (code >= 80 && code <= 82) return "🌦️";
  if (code >= 95) return "⛈️";
  return "🌤️";
}

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card>
      <CardHeader title="Weather" eyebrow={weather.location} />
      <div className="flex items-center gap-4">
        <span className="text-5xl" aria-hidden="true">
          {iconFor(weather.now.code)}
        </span>
        <div>
          <p className="font-display text-4xl text-ink">{weather.now.temperatureC}°</p>
          <p className="text-sm text-ink-soft">{weather.now.condition}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
        {weather.forecast.map((day) => (
          <div key={day.label} className="text-center">
            <p className="text-xs font-medium text-ink-muted">{day.label}</p>
            <p className="my-1 text-xl" aria-hidden="true">
              {iconFor(day.code)}
            </p>
            <p className="text-xs text-ink-soft">
              <span className="font-medium text-ink">{day.highC}°</span> / {day.lowC}°
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
