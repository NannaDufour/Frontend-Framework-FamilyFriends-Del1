import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 ">
      {tags.map((tag) => (
        <li key={tag.label}>
          <Tag label={tag.label} color={tag.color} />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
