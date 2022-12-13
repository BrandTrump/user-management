import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";
import PublishRubricComponent from "../components/rubric-template/PublishRubric.tsx";

export default function LearningObjectives () {
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <div>
            <PublishRubricComponent />
        Lol2
        <MicrosoftSignOut setIsAuth={setIsAuth} />
        </div>
        );
}