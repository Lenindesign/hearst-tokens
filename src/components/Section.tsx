interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="bg-white rounded-2xl p-8 shadow-sm mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}
