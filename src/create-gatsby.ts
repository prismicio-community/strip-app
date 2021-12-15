import { hasDependencies } from "./lib/hasDependencies";
import { readPackageJson } from "./lib/readPackageJson";
import { deleteEntries } from "./lib/deleteEntries";
import { getEntries } from "./lib/getEntries";

import type { ProcessArgs } from "./types";

export const detect = () => {
	const pkg = readPackageJson();

	return (
		hasDependencies(["gatsby", "react", "react-dom"], pkg) &&
		pkg.devDependencies === undefined
	);
};

export const process = async ({ cliContext }: ProcessArgs) => {
	const entries = await getEntries([
		"src/pages/**/*",
		"src/images/**/*",
		"src/images/",
	]);

	if (entries.length < 1) {
		console.log("Nothing to delete");

		return;
	}

	await deleteEntries(entries, { cliContext });
};
