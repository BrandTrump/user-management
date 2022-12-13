import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { LearningOutcomesComp } from "../components/rubric-template/LearningOutcomes.tsx";

export default function LearningObjectives() {
  return (
    <div>
      <LearningOutcomesComp />
      <MicrosoftSignOut />
    </div>
  );
}
