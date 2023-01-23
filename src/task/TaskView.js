import React from 'react';
import { GiCheckboxTree } from "react-icons/gi";
import { TfiCalendar } from "react-icons/tfi";
import { BsTrash, BsPencil } from 'react-icons/bs';

function TaskView({TaskContent,DeleteTodo,EditTodo}) {


          
  return (
    <>

        {
            TaskContent.map(TaskContent => (
                    
                    <div className='enter_task' key={TaskContent.id}>
                    <div className='enter_lists'>
                        <label className='task_sure'>
                            <input type='checkbox' className='check_first' />
                            <span className='task_names'>{TaskContent.Name}</span>
                        </label>
                        <div className='show_date'>
                            <div className='task_display space_to'>
                                <GiCheckboxTree className='task_icon'/>
                                <span className='display_count'>0/1</span>
                            </div>

                            <div className='task_display today_task'>
                                <TfiCalendar />
                                <span className='task_date'>Today</span>
                            </div>
                            
                        </div>
                        
                    </div>
                        <div className='task_status'>
                            <BsPencil className='status_act mr_right' onClick={(e) => {EditTodo(TaskContent.id)}}/>
                            {/* <BsTrash className='status_act' onClick={(e) => {DeleteTodo(TaskContent.id)}}/> */}
                            <BsTrash className='status_act' onClick={(e) => {DeleteTodo(TaskContent.id)}}/>

                        </div>
                </div>

                
            ))
        }
        
    
    </>
  )
}

export default TaskView