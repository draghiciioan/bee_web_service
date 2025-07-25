const AnimatedBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 animate-gradient opacity-70"
      style={{
        backgroundImage: "linear-gradient(270deg, #0f0c29, #302b63, #24243e)",
        backgroundSize: "300% 300%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 50%", // Explicitly set initial position
      }}
    />
  );
};

export default AnimatedBackground;
