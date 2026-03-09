import ModuleTemplate from "./ModuleTemplate";

const activityFields = [
  {
    name: "activityDescription",
    label: "Description of Activities Conducted",
    type: "text",
  },
  {
    name: "treatments",
    label: "Treatments / Services Provided",
    type: "text",
  },
  {
    name: "screening",
    label: "Screening Done",
    type: "select",
    options: ["BP", "Sugar", "BMI", "BP + Sugar", "All"],
  },
  {
    name: "yogaDetails",
    label: "Yoga / Wellness Sessions Details",
    type: "text",
  },
  {
    name: "medicines",
    label: "Medicines Distributed",
    type: "text",
  },
  {
    name: "iecActivities",
    label: "IEC / BCC Activities Done",
    type: "text",
  },
];

export default function Activity() {
  return (
    <ModuleTemplate
      moduleName="Activity"
      fields={activityFields}
    />
  );
}
