import InfoSection from "./InfoSection";

const BreedInfo = ({ description, history }) => {
  return (
    <>
      <InfoSection label="Breed description" text={description} />
      <InfoSection label="Breed history" text={history} />
    </>
  );
};

export default BreedInfo;
