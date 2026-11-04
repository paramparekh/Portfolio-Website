export default function PageHeader({ title, description }) {
  return (
    <header className="page-header">
      <p className="eyebrow">Param Parekh / Portfolio</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}
