import { readFileSync } from "fs";

import type { PackageJsonLike } from "../types";

const isPackageJson = (input: unknown): input is PackageJsonLike => {
	return typeof input === "object" && input !== null && "dependencies" in input;
};

export const readPackageJson = () => {
	const pkgRaw = readFileSync("package.json", "utf8");
	const pkg = JSON.parse(pkgRaw);

	if (isPackageJson(pkg)) {
		return pkg;
	} else {
		throw new Error("Invalid package.json");
	}
};
