import type { PackageJsonLike } from "../types";

export const hasDependencies = (
	dependencies: string[],
	packageJson: PackageJsonLike,
): boolean => {
	return Object.keys(packageJson.dependencies).every((dep) => {
		return dependencies.includes(dep);
	});
};
