import Image from "next/image";
import { Atom, Database, Workflow, Package, CodeXml } from "lucide-react";

const logos = {
  C: "c-original.svg",
  "C++": "cplusplus-original.svg",
  Python: "python-original.svg",
  Matlab: "matlab-original.svg",
  HTML: "html5-original.svg",
  CSS: "css3-original.svg",
  Javascript: "javascript-original.svg",
  GO: "go-original-wordmark.svg",
  "Visual Studio": "visualstudio-original.svg",
  "VS Code": "vscode-original.svg",
  PostgreSQL: "postgresql-original.svg",
  "Matlab & Simulink": "matlab-original.svg",
  "Arduino IDE": "arduino-original.svg",
  Angular: "angular-original.svg",
  Windows: "windows11-original.svg",
  Linux: "linux-original.svg",
};
const symbols = { Qiskit: Atom, "ZX calculus": Workflow, SQL: Database, "Install Shield": Package };

export default function SkillBadge({ name }) {
  const Icon = symbols[name] || CodeXml;
  return (
    <span className="skill-badge">
      <span className="skill-logo" aria-hidden="true">
        {logos[name] ? <Image src={`/logos/${logos[name]}`} alt="" width={18} height={18} /> : <Icon size={18} />}
      </span>
      {name}
    </span>
  );
}
