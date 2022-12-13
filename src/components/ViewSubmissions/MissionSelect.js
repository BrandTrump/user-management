import { Link } from "react-router-dom";
import style from "../../styles/MissionSelect.module.css";

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
    <div className={style.btnContainer}>
      <h2>Select Mission Number</h2>
      {missions.map((mission, id) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Link
              to={`/submissions/mission/${mission.id}`}
              key={id}
              className={style.missionBtn}
            >
              Mission {mission.id}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MissionSelect;
