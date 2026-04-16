const configuredBaseUrl = import.meta.env.VITE_BACKEND_URL?.trim();
const fallbackBaseUrl = import.meta.env.DEV
	? "http://localhost:4000"
	: "https://volnix-ai.vercel.app";

export const API_BASE_URL = (configuredBaseUrl || fallbackBaseUrl).replace(/\/+$/, "");
