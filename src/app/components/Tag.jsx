const variants = {
  blue: "bg-tag-blue text-tag-blue-text",
  pink: "bg-tag-pink text-tag-pink-text",
  green: "bg-tag-green text-tag-green-text",
  yellow: "bg-tag-yellow text-tag-yellow-text",
};

const Tag = ({ label, color = "blue" }) => {
  return (
    <span
      className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm ${variants[color]}`}
    >
      {label}
    </span>
  );
};

export default Tag;
