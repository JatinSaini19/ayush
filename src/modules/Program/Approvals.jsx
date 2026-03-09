// src/pages/Approvals.jsx
import React from "react";
import ModuleTemplate from "./ModuleTemplate.jsx";

export default function Approvals() {
  const fields = [
    { name: "name", label: "Approval Name", type: "text" },
    { name: "status", label: "Status", type: "select", options: ["Pending", "Approved", "Rejected"] },
  ];

  return <ModuleTemplate moduleName="Approvals" fields={fields} />;
}
