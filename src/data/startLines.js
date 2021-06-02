import { helpLines } from 'services/runCommand/commands/printHelp'

export const startLines = [
  { status: "success", type: "input", value: "help" },
  ...helpLines
];