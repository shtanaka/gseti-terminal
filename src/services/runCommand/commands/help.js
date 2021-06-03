export const helpLines = [
  { status: "success", type: "output", value: "\n" },
  { status: "success", type: "output", value: "Usage: [command]" },
  { status: "success", type: "output", value: "List of commands:" },
  { status: "success", type: "output", value: "\n" },
  { status: "success", type: "output", value: "companies                See all companies Gustavo has worked in" },
  { status: "success", type: "output", value: "company [company_name]   See more about Gustavo's experience in a company. You will see the whole experience he have and what he worked on and see if he fits well in your projects or not." },
  { status: "success", type: "output", value: "education                See School and programs Gustavo has done in his educational path" },
  { status: "success", type: "output", value: "techskills               See programming languages and technology Gustavo has experience with" },
  { status: "success", type: "output", value: "\n" },
]

export const help = async () => helpLines
