import { existsSync, rmSync, rmdirSync } from "fs";
import chalk from "chalk";
import type { Entry } from "fast-glob";

import { waitForConfirm } from "./waitForConfirm";
import { ProcessArgs } from "../types";

type DeleteEntriesArgs = {
	cliContext: ProcessArgs["cliContext"];
};

export const deleteEntries = async (
	entries: Entry[],
	{ cliContext }: DeleteEntriesArgs,
): Promise<void> => {
	if (!cliContext.flags.confirm) {
		console.log(`The following files will be deleted:\n`);
		console.log(
			entries
				.sort((a, b) => a.path.localeCompare(b.path))
				.map((path) => `${chalk.bgRed.bold("DELETE")} ${path.path}\n`)
				.join(""),
		);
		console.log(`Press ENTER to continue`);
		console.log(`Press CTRL + C to cancel`);

		await waitForConfirm();

		console.log();
	}

	for (const entry of entries) {
		console.log(`${chalk.red("deleted")}  ${entry.path}`);

		if (!cliContext.flags.dryRun && existsSync(entry.path)) {
			if (entry.stats?.isDirectory()) {
				rmdirSync(entry.path, { recursive: true });
			} else {
				rmSync(entry.path);
			}
		}
	}
};
