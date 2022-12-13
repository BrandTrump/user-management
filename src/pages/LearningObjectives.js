import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";
import {LearningOutcomes, PublishRubric} from "../components/rubric-template/LearningOutcomes.tsx";
import { LearningOutcomesComp } from "../components/rubric-template/LearningOutcomes.tsx";

export default function LearningObjectives () {
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <div>
            <LearningOutcomesComp />
        <MicrosoftSignOut setIsAuth={setIsAuth} />
        </div>
        );
}