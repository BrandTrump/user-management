import { Link } from "react-router-dom";

const MissionSelect = () => {
  const missions = [
    { id: 1, mission: 1 },
    { id: 2, mission: 2 },
    { id: 3, mission: 3 },
    { id: 4, mission: 4 },
    { id: 5, mission: 5 },
    { id: 6, mission: 6 },
  ];
  return (
    <div>
      {missions.map((mission, id) => {
        return (
          <Link to={`/submission/mission/${mission.id}`} key={id}>
            Mission {mission.id}
          </Link>
        );
      })}
    </div>
  );
};

export default MissionSelect;
