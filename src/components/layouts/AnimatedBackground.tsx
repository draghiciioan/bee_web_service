const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient layer - using bee-themed colors */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          backgroundImage: "linear-gradient(135deg, #0C0014, #1B0033, #320055, #FFD500)",
          backgroundSize: "400% 400%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 50%",
          opacity: 0.9,
        }}
      />
      
      {/* Glow effect layer - amber/yellow bee glow */}
      <div
        className="absolute inset-0 animate-glow"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #FFD500, transparent 60%)",
          opacity: 0.6,
        }}
      />
      
      {/* Honeycomb pattern - replacing grid lines with bee-themed hexagons */}
      <div
        className="absolute inset-0 animate-grid"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23FFD500' stroke-opacity='0.3' stroke-width='1'/%3E%3Cpath d='M28 0L56 16L56 50L28 66L0 50L0 16L28 0Z' fill='none' stroke='%23FFD500' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
          opacity: 0.3,
        }}
      />
      
      {/* Horizontal scan line - using bee yellow/amber colors */}
      <div
        className="absolute inset-x-0 h-[4px] animate-scan-line"
        style={{
          background: 'linear-gradient(to right, transparent, #FFD500, #FFB300, #FFD500, transparent)',
          boxShadow: '0 0 15px 5px #FFD500',
        }}
      />
      
      {/* Vertical scan lines - using amber tint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255, 213, 0, 0.05) 50%)',
          backgroundSize: '4px 100%',
          pointerEvents: 'none',
        }}
      />
      
      {/* Flicker overlay */}
      <div
        className="absolute inset-0 animate-flicker"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
          pointerEvents: 'none',
        }}
      />
      
      {/* Bee particles - yellow/black dots representing bees */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#FFD500 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
          backgroundPosition: '0 0, 25px 25px',
          backgroundSize: '50px 50px',
          opacity: 0.3,
        }}
      />
      
      {/* Bee flight paths - subtle curved lines */}
      <div
        className="absolute inset-0 animate-bee-flight"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10,50 Q25,25 50,50 T90,50' fill='none' stroke='%23FFD500' stroke-opacity='0.2' stroke-width='1'/%3E%3Cpath d='M30,70 Q45,45 70,70 T90,70' fill='none' stroke='%23FFD500' stroke-opacity='0.2' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          opacity: 0.2,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
