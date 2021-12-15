import meow from "meow";

import type { ProcessArgs } from "../types";

import * as createNextApp from "../create-next-app";
import * as createGatsby from "../create-gatsby";

const cli = meow(
	`
	Usage
	  $ strip-app

	Options
	  --type,    -t  Type of app
	  --dry-run, -n  Show what would be stripped
	  --confirm, -y  Automatically confirm stripping

	Examples
	  $ strip-app
	  $ strip-app --dry-run
	  $ strip-app --type create-next-app
	`,
	{
		importMeta: import.meta,
		flags: {
			type: {
				type: "string",
				alias: "t",
			},
			dryRun: {
				type: "boolean",
				alias: "n",
			},
			confirm: {
				type: "boolean",
				alias: "y",
			},
		},
	},
);

const detectType = () => {
	if (createNextApp.detect()) {
		return "create-next-app";
	} else if (createGatsby.detect()) {
		return "create-gatsby";
	}
};

const main = async () => {
	const type = cli.flags.type || detectType();
	const typeWasDetected = Boolean(type && !cli.flags.type);

	if (!type) {
		console.log(`Unable to detect app type. Exiting.`);

		return;
	}

	if (typeWasDetected) {
		console.log(`Detected ${type}\n`);
	}

	const processArgs: ProcessArgs = { cliContext: cli };

	switch (type) {
		case "create-next-app": {
			await createNextApp.process(processArgs);
			break;
		}

		case "create-gatsby": {
			await createGatsby.process(processArgs);
			break;
		}

		default: {
			console.log(`${type} is unsupported. Exiting.`);
		}
	}

	return;
};

main().finally(() => {
	process.exit();
});
