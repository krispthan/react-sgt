import React, {Component} from 'react';
import axios from 'axios';
import StudentRow from './student_row';
import {formatPostData} from '../helpers';
import {Link} from 'react-router-dom';



class Table extends Component {
    state = {
        students:null
    }
     componentDidMount(){
       this.getStudentData();
      
    }
    deleteStudent = async(id) => {
        const formattedId =formatPostData({id:id});
        await axios.post("server/deletestudent.php", formattedId);
        this.getStudentData();
      
      }
    async getStudentData(){
        const resp = await axios.get('/server/getstudentlist.php');
        this.setState({
          students:resp.data.data || []
        });
      }
    render(){
        const{students} = this.state;
        let studentRows = [];
        if(Array.isArray(students) && students.length){
            studentRows = students.map((student) => {
                return <StudentRow  delete={this.deleteStudent} key = {student.id} student = {student}/>      
             });
            } else if (students === null) {
              <tr key="no-data">
                   <td colSpan="4">
                    <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
            </tr>
            }
         else {
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                    <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }
           
            return (
                <div>
                    <h1 className="center">Student Grade Table</h1>
                    <div className="row">
                        <div className="col s12 right-align">
                            <Link className ="btn cyan"to="/add-student">Add Student</Link>
                        </div>
                    </div>
                        <table className="striped">
                      <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Actions</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentRows}
                    </tbody>
                </table>
                </div>
     
            );
        }
    }
   

 export default Table;