import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";
import LearningObjectivesComponent from "../components/rubric-template/LearningOutcomes.tsx";

export default function LearningObjectives () {
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <div>
            <LearningObjectivesComponent />
        Lol
        <MicrosoftSignOut setIsAuth={setIsAuth} />
        </div>
        );
}