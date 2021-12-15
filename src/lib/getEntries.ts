import fg from "fast-glob";
import type { Entry } from "fast-glob";

export const getEntries = async (globs: string[]): Promise<Entry[]> => {
	return await fg(globs, {
		onlyFiles: false,
		stats: true,
	});
};
