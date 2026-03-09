export default function Viewer({ onSelect }) {
  return <>
    <button onClick={()=>onSelect("dashboard")}>← Back</button>
    <h3>Viewer Module</h3>
  </>;
}
