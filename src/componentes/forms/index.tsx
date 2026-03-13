import React from "react"; 
class forms extends React.Component
{
    render(): React.ReactNode 
    {
        return (
            <forms>
                <div>
                    <label htmlFor="task">
                        adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="o que vc quer estudar"
                    required/>
                </div>
                <div>
                    <label htmlFor="time">
                        tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"/>
                </div>
                <button/>
            </forms>
        )
    }

}
export default forms;