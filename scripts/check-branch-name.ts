import { readFileSync } from "node:fs";

const pushedRefs: string[] = readFileSync(0, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim().split(/\s+/)[0])
    .filter(
        (ref): ref is string => ref?.startsWith("refs/heads/local/") === true
    );
const pushedLocalBranch: string | undefined = pushedRefs[0]?.replace(
    "refs/heads/",
    ""
);

if (pushedLocalBranch) {
    const devBranch = `dev/${pushedLocalBranch.slice("local/".length)}`;
    const message = [
        `Refusing to push ${pushedLocalBranch}.`,
        "Branches under local/* are for local work only, not for pushing.",
        `Rename it to ${devBranch} before pushing:`,
        `  git branch -m ${devBranch}`,
        `  git push -u origin ${devBranch}`,
    ].join("\n");
    process.stderr.write(`${message}\n`);
    process.exit(1);
}
