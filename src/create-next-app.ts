import { hasDependencies } from "./lib/hasDependencies";
import { hasDevDependencies } from "./lib/hasDevDependencies";
import { readPackageJson } from "./lib/readPackageJson";
import { deleteEntries } from "./lib/deleteEntries";
import { getEntries } from "./lib/getEntries";

import type { ProcessArgs } from "./types";

export const detect = () => {
	const pkg = readPackageJson();

	return (
		hasDependencies(["next", "react", "react-dom"], pkg) &&
		hasDevDependencies(["eslint", "eslint-config-next"], pkg)
	);
};

export const process = async ({ cliContext }: ProcessArgs) => {
	const entries = await getEntries([
		"pages/**/*",
		"public/**/*",
		"styles/**/*",
		"styles/",
		"public/",
	]);

	if (entries.length < 1) {
		console.info("Nothing to delete");

		return;
	}

	await deleteEntries(entries, { cliContext });
};
