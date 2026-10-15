import { FiBell } from "react-icons/fi";

const Notification = ({ hasNew = false }) => {
  return (
    <button
      aria-label={hasNew ? "Notifications (new)" : "Notifications"}
      className="relative p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
    >
      <FiBell className="h-6 w-6" />
      {hasNew && (
        <span
          aria-hidden="true"
          className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-coral ring-2 ring-white"
        />
      )}
    </button>
  );
};

export default Notification;
