import { helpLines } from 'services/runCommand/commands/help'

export const startLines = [
  { status: "success", type: "input", value: "help" },
  ...helpLines
];