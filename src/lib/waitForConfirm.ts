export const waitForConfirm = async (): Promise<void> => {
	process.stdin.setRawMode(true);

	return new Promise((resolve) =>
		process.stdin.on("data", (data) => {
			const byteArray = [...data];

			if (byteArray.length > 0) {
				if (byteArray[0] === 3) {
					// Exit with CTRL + C
					console.log("^C");
					process.exit(1);
				} else if (byteArray[0] === 13) {
					// Continue with ENTER
					process.stdin.setRawMode(false);
					resolve();
				}
			}
		}),
	);
};
