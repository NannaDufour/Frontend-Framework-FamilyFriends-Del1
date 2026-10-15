const InfoSection = ({ label, text }) => {
  return (
    <section className="mt-6">
      <h2 className="text-sm text-gray-400">{label}</h2>
      <p className="text-base text-gray-500">{text}</p>
    </section>
  );
};

export default InfoSection;
