import React from 'react'
import { Route } from 'react-router-dom'

// components
import StudentOverviewOverviewContainer from './studentOverview/StudentOverviewContainer'
import AddStudentContainer from './addStudent/AddStudentContainer'
import StudentSingleContainer from './studentSingle/StudentSingleContainer'
import EditStudentContainer from './studentSingle/editStudent/EditStudentContainer'

export default function Routes() {
    return (
    <>
      <Route exact path="/student-roster" component={StudentOverviewOverviewContainer} />
      <Route path="/student-roster/new" component={AddStudentContainer} />
      <Route exact path="/student-roster/students/view/:studentId" component={StudentSingleContainer} />
      <Route exact path="/student-roster/students/edit/:studentId" component={EditStudentContainer} />
    </>
    )
}
