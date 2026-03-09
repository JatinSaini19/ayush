import ModuleTemplate from "./ModuleTemplate";

const eventFields = [
  {
    name: "programmeName",
    label: "Programme Name",
    type: "text",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: [
      "Yoga",
      "NCD",
      "Awareness",
      "Training",
      "Camp",
    ],
  },
  {
    name: "eventDateTime",
    label: "Event Date & Time",
    type: "datetime-local",
  },
  {
    name: "venue",
    label: "Venue Name & Location",
    type: "text",
  },
  {
    name: "organizingUnit",
    label: "Organizing Unit",
    type: "select",
    options: [
      "AAM",
      "District AYUSH",
      "NGO Collaboration",
    ],
  },
  {
    name: "targetGroup",
    label: "Target Group",
    type: "select",
    options: [
      "Women",
      "Children",
      "Elderly",
      "General Public",
    ],
  },
];

export default function Event() {
  return (
    <ModuleTemplate
      moduleName="Event"
      fields={eventFields}
    />
  );
}
