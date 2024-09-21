export function getIp(req: Request): string | null {
	const testIP = "127.0.0.1";
	if (process.env.NODE_ENV === "test") {
		return testIP;
	}
	const headers = [
		"x-client-ip",
		"x-forwarded-for",
		"cf-connecting-ip",
		"fastly-client-ip",
		"x-real-ip",
		"x-cluster-client-ip",
		"x-forwarded",
		"forwarded-for",
		"forwarded",
	];

	for (const header of headers) {
		const value = req.headers.get(header);
		if (typeof value === "string") {
			const ip = value.split(",")[0].trim();
			if (ip) return ip;
		}
	}
	return null;
}