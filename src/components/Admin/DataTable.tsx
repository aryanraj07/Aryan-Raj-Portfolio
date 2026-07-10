type DataTableProps = {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export default function DataTable({ title, children, action }: DataTableProps) {
  return (
    <section className="glass rounded-3xl border border-border overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-xl font-semibold">{title}</h2>
        {action}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}
