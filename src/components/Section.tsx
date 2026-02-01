interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section 
      id={id} 
      className="bg-white rounded-2xl p-8 mb-8"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
    >
      <h2 className="text-2xl font-bold text-[#121212] mb-6 pb-3 border-b-2 border-[#f5f5f5]">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Subsection title component
export function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[1.1rem] font-semibold text-[#575757] mt-6 mb-4">
      {children}
    </h3>
  );
}

// Palette group component
export function PaletteGroup({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-[#3b3b3b] mb-4 capitalize">
        {name}
      </h3>
      {children}
    </div>
  );
}
