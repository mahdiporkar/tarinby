const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3007";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "خطایی رخ داد.");
  }

  return response;
}

export function getToken() {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem("tarinby_token");
}
