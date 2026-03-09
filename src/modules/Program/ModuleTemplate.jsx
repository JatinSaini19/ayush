import "./ModuleTemplate.css";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/ProgrammeSidebar";

export default function ModuleTemplate({ moduleName, fields }) {
  const createEmptyForm = () =>
    Object.fromEntries(fields.map((f) => [f.name, ""]));

  const [form, setForm] = useState(createEmptyForm());
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(moduleName)) || [];
    setData(saved);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setForm((prev) => ({
          ...prev,
          gpsLocation: `${pos.coords.latitude}, ${pos.coords.longitude}`,
          dateTime: new Date().toISOString().slice(0, 16),
        }));
      });
    }
  }, [moduleName]);

  // 🔥 File reader
  const readFile = (file, cb) => {
    const reader = new FileReader();
    reader.onloadend = () => cb(reader.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (e, field, index = null) => {
    if (field.type === "dynamic-photos" || field.type === "dynamic-videos") {
      const file = e.target.files[0];
      readFile(file, (result) => {
        const arr = form[field.name] || [];
        const updated = [...arr];
        updated[index] = result;
        setForm({ ...form, [field.name]: updated });
      });
    } else if (field.type === "file") {
      readFile(e.target.files[0], (result) => {
        setForm({ ...form, [field.name]: result });
      });
    } else {
      setForm({ ...form, [field.name]: e.target.value });
    }
  };

  const addDynamicField = (name) => {
    const arr = form[name] || [];
    setForm({ ...form, [name]: [...arr, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updated = [...data];

    if (editIndex !== null) {
      updated[editIndex] = form;
      setEditIndex(null);
    } else {
      updated.push(form);
    }

    setData(updated);
    localStorage.setItem(moduleName, JSON.stringify(updated));
    setForm(createEmptyForm());
  };

  const handleEdit = (i) => {
    setForm(data[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    const filtered = data.filter((_, idx) => idx !== i);
    setData(filtered);
    localStorage.setItem(moduleName, JSON.stringify(filtered));
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="module-header">
          <h2>{moduleName} Module</h2>
        </div>

        <form onSubmit={handleSubmit} className="form-table">
          {fields.map((f, idx) => {
            // 🔥 Dynamic Photos
            if (f.type === "dynamic-photos") {
              return (
                <div key={idx}>
                  <h4>Photos</h4>
                  {(form[f.name] || []).map((img, i) => (
                    <div key={i}>
                      <input
                        type="file"
                        onChange={(e) => handleChange(e, f, i)}
                      />
                      {img && <img src={img} width="120" />}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addDynamicField(f.name)}
                  >
                    + Add Photo
                  </button>
                </div>
              );
            }

            // 🔥 Dynamic Videos
            if (f.type === "dynamic-videos") {
              return (
                <div key={idx}>
                  <h4>Videos</h4>
                  {(form[f.name] || []).map((vid, i) => (
                    <div key={i}>
                      <input
                        type="file"
                        onChange={(e) => handleChange(e, f, i)}
                      />
                      {vid && <video width="200" controls src={vid} />}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addDynamicField(f.name)}
                  >
                    + Add Video
                  </button>
                </div>
              );
            }

            // 🔥 Select
            if (f.type === "select") {
              return (
                <select
                  key={idx}
                  value={form[f.name]}
                  onChange={(e) => handleChange(e, f)}
                  required
                >
                  <option value="">Select {f.label}</option>
                  {f.options.map((o, i) => (
                    <option key={i}>{o}</option>
                  ))}
                </select>
              );
            }

            // 🔥 Normal Input
            return (
              <input
                key={idx}
                type={f.type}
                placeholder={f.label}
                value={form[f.name]}
                onChange={(e) => handleChange(e, f)}
                required
              />
            );
          })}

          <button type="submit">
            {editIndex !== null ? "Update" : "Add"} {moduleName}
          </button>
        </form>

        {/* TABLE */}
        <table>
          <thead>
            <tr>
              {fields.map((f, i) => (
                <th key={i}>{f.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {fields.map((f, j) => (
                  <td key={j}>
                    {Array.isArray(row[f.name]) ? (
                      row[f.name].map((x, k) =>
                        f.type === "dynamic-videos" ? (
                          <video key={k} width="60" src={x} />
                        ) : (
                          <img key={k} src={x} width="60" />
                        )
                      )
                    ) : (
                      row[f.name]
                    )}
                  </td>
                ))}
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
