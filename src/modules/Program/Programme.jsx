import React from "react";
import ModuleTemplate from "./ModuleTemplate.jsx";

export default function Programme() {
  const fields = [
    { name: "name", label: "Programme Name", type: "text" },
    { name: "date", label: "Date", type: "date" },
  ];

  return <ModuleTemplate moduleName="Programme" fields={fields} />;
}
