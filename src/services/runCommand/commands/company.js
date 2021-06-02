
const lines = {
  xteam: [
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "[xteam] Software Developer - X-Team - June 2021 - Moment - Fortaleza, BR" },
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "- Shopify developer, using Liquid, ReactJS and SSR technologies. " },
    { status: "success", type: "output", value: "- Working for top US companies." },
    { status: "success", type: "output", value: "\n" },
  ],
  oowlish: [
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "[oowlish] Tech Lead - Oowlish - September 2018 - June 2021 - Fortaleza, BR" },
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "- Responsible for managing and delivering high scalable applications for world class companies across Americas and Europe. Main Focus on Health and Pet industry." },
    { status: "success", type: "output", value: "- Adoption of best practices for optimizing and scaling Server and Client side apps." },
    { status: "success", type: "output", value: "- Developed across multiple properties for Petco and Petcoach (aquired by Petco) being part of the Membership and Wellness innovation team using React and Django." },
    { status: "success", type: "output", value: "- Played as Tech Lead for coding and launching a quick 2 month project in React Native called Care Birds For Elderly Care daily control in a team of 3 developers." },
    { status: "success", type: "output", value: "- Last role: Leading multiple squads on delivering applications using modern web and mobile Technologies for metamorphosis.com, making sure we apply best practices across all properties using React, React Native, NodeJS, Python/Django, Wordpress and Shopify. Point of contact toclients and Product Managers to gather requirements and work with Squads on deliveries." },
    { status: "success", type: "output", value: "- Most used Technologies: React (with Server side rendering), React Native, GraphQL, BackboneJS, and Django." },
    { status: "success", type: "output", value: "" },
    { status: "success", type: "output", value: "\n" },
  ],
  audo: [
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "[audo] Software Developer - Audo - August 2017 - September 2018 - Fortaleza, BR" },
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "- Implementation and testing of Client and Server web application for medical report analysis." },
    { status: "success", type: "output", value: "- Implementation of desktop agents for optimizing browser processing of medical images." },
    { status: "success", type: "output", value: "- Implementation of an text editor from scratch utilizing pure vanilla Javascript." },
    { status: "success", type: "output", value: "- Implementation of UX Artifacts." },
    { status: "success", type: "output", value: "" },
    { status: "success", type: "output", value: "\n" },
  ],
  fourwinds: [
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "[fourwinds] Software Developer - Four Winds - December 2016 - April 2017 - Edmonton, CA" },
    { status: "success", type: "output", value: "\n" },
    { status: "success", type: "output", value: "- Analysis and development of web application for an Aboriginal Community." },
    { status: "success", type: "output", value: "- Deployment of applications to Digital Ocean." },
    { status: "success", type: "output", value: "- Home Office Development." },
    { status: "success", type: "output", value: "- Technologies: Django and AngularJS." },
    { status: "success", type: "output", value: "" },
    { status: "success", type: "output", value: "\n" },
  ]
}


export const company = async (cmd) => {
  const terms = cmd.split(' ')
  const companyTag = terms[1]
  const companyInfo = lines[companyTag];

  if (companyInfo) {
    return lines[companyTag]
  }

  return { status: "error", type: "output", value: "Company not found. Please list companies under '$ companies' and select a valid company tag" }
}
