import type { WeatherData, WeatherDay } from "./types";

// Brisbane, Australia
const LATITUDE = -27.4698;
const LONGITUDE = 153.0251;

// WMO weather interpretation codes -> short human labels.
// https://open-meteo.com/en/docs
const WEATHER_CODE_LABELS: Record<number, string> = {
  0: "Clear sky",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy showers",
  95: "Thunderstorm",
  96: "Thunderstorm",
  99: "Thunderstorm",
};

function labelForCode(code: number): string {
  return WEATHER_CODE_LABELS[code] ?? "Unsettled";
}

function dayLabel(dateStr: string, index: number): string {
  if (index === 0) return "Tomorrow";
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-AU", { weekday: "short" });
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

// Live, no-key weather source: Open-Meteo.
export async function getBrisbaneWeather(): Promise<WeatherData> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(LATITUDE));
  url.searchParams.set("longitude", String(LONGITUDE));
  url.searchParams.set("current", "temperature_2m,weather_code");
  url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min");
  url.searchParams.set("timezone", "Australia/Brisbane");
  url.searchParams.set("forecast_days", "4");

  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) {
    throw new Error(`Open-Meteo request failed: ${res.status}`);
  }
  const data = (await res.json()) as OpenMeteoResponse;

  const forecast: WeatherDay[] = data.daily.time
    .slice(1, 4)
    .map((date, i) => ({
      label: dayLabel(date, i),
      highC: Math.round(data.daily.temperature_2m_max[i + 1]),
      lowC: Math.round(data.daily.temperature_2m_min[i + 1]),
      condition: labelForCode(data.daily.weather_code[i + 1]),
      code: data.daily.weather_code[i + 1],
    }));

  return {
    location: "Brisbane, AU",
    now: {
      temperatureC: Math.round(data.current.temperature_2m),
      condition: labelForCode(data.current.weather_code),
      code: data.current.weather_code,
    },
    forecast,
  };
}
