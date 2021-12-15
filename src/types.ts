import * as meow from "meow";

export interface PackageJsonLike {
	dependencies: Record<string, string>;
	devDependencies: Record<string, string>;
}

export interface ProcessArgs {
	cliContext: CLIContext;
}

export type CLIContext = meow.Result<{
	type: {
		type: "string";
		alias: "t";
	};
	dryRun: {
		type: "boolean";
		alias: "n";
	};
	confirm: {
		type: "boolean";
		alias: "y";
	};
}>;
