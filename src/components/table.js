import React, {Component} from 'react';
import StudentRow from './student_row';
import studentData from '../data/get_all_students';

class Table extends Component{
    state = {
        students:[]
    }
    componentDidMount(){
        this.getStudentData();
    }
    getStudentData(){
        //Call server to get student Data

        this.setState({
            students: studentData
        });
    }
    render(){
        console.log('Table State:', this.state);
        const studentRows = this.state.students.map((student) => {
           return <StudentRow key = {student.id} student = {student}/>
             
        })
        return (
            <div className="row">
                <div className="col s12 m8">
                <table>
                  <thread>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thread>
                <tbody>
                    {studentRows}
                </tbody>
            </table>
       </div>
  </div>
        );
    }
}
 export default Table;