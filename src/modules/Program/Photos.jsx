import ModuleTemplate from "./ModuleTemplate";

const photoFields = [
  { name: "photos", label: "Photos", type: "dynamic-photos" },
  { name: "videos", label: "Videos", type: "dynamic-videos" },
  { name: "gpsLocation", label: "GPS Location", type: "text" },
  { name: "dateTime", label: "Date & Time", type: "datetime-local" },
];

export default function Photos() {
  return (
    <ModuleTemplate
      moduleName="Photo & Video Documentation"
      fields={photoFields}
    />
  );
}
