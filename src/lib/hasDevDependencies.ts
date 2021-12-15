import type { PackageJsonLike } from "../types";

export const hasDevDependencies = (
	devDependencies: string[],
	packageJson: PackageJsonLike,
): boolean => {
	return Object.keys(packageJson.devDependencies).every((dep) => {
		return devDependencies.includes(dep);
	});
};
