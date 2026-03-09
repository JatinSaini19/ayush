import ModuleTemplate from "./ModuleTemplate";

const participationFields = [
  {
    name: "totalParticipants",
    label: "Total Participants",
    type: "number",
  },
  {
    name: "maleCount",
    label: "Male Participants",
    type: "number",
  },
  {
    name: "femaleCount",
    label: "Female Participants",
    type: "number",
  },
  {
    name: "childrenCount",
    label: "Children",
    type: "number",
  },
  {
    name: "seniorCitizens",
    label: "Senior Citizens",
    type: "number",
  },
  {
    name: "specialCategory",
    label: "Special Category Attendees",
    type: "text",
  },
  {
    name: "staffInvolved",
    label: "Number of Staff Involved",
    type: "number",
  },
  {
    name: "externalAgencies",
    label: "External Agencies Involved",
    type: "text",
  },
];

export default function Participation() {
  return (
    <ModuleTemplate
      moduleName="Participation"
      fields={participationFields}
    />
  );
}
