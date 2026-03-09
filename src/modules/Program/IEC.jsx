import ModuleTemplate from "./ModuleTemplate";

const iecFields = [
  {
    name: "posters",
    label: "Posters Displayed",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "banners",
    label: "Banners Installed",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "pamphlets",
    label: "Pamphlets Distributed",
    type: "number",
  },
  {
    name: "digitalIec",
    label: "Digital IEC Used",
    type: "select",
    options: ["Yes", "No"],
  },
];

export default function IEC() {
  return (
    <ModuleTemplate
      moduleName="IEC Material Tracking"
      fields={iecFields}
    />
  );
}
