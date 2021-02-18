import React, { useContext, useState } from 'react'
import { sampleStudents } from './TestData'
import { newStudentObj } from './NewStudentObj'
import { v4 as uuidv4 } from 'uuid'

const StudentContext = React.createContext()

export function useStudent() {
    return useContext(StudentContext)
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(sampleStudents)
  const [selectedStudentId, setSelectedStudentId] = useState()
  const [newStudent, setNewStudent] = useState(newStudentObj)
  const selectedStudent = students.find(student => student.id === selectedStudentId)

  function handleStudentSelect(id) {
    setSelectedStudentId(id)
  }

  function findStudent(id) {
    return students.find(student => student.id === id)
  }

  function handleStudentAdd() {
      setStudents([...students, newStudent])
  }

  function handleStudentChange(id, student) {
      const newStudents = [...students]
      const index = newStudents.findIndex(r => r.id === id)
      newStudents[index] = student
      setStudents(newStudents)
  }

  function handleResetNewStudent() {
    setNewStudent({...newStudentObj, ...{id: uuidv4()}})
  }

  function handleAppendNewStudent(studentToAdd) {
    const newStudents = students
    newStudents.push(studentToAdd)
    setStudents(newStudents)
  }

  function handleDeleteStudent(id) {
    let newStudents = [...students]
    newStudents = newStudents.filter(student => student.id !== id)
    setStudents(newStudents)
  }

  function replaceStudents(localStudents) {
    setStudents(localStudents)
  }

  const value = {
      students,
      selectedStudent,
      newStudent,
      handleStudentSelect,
      handleStudentAdd,
      handleStudentChange,
      findStudent,
      handleResetNewStudent,
      handleAppendNewStudent,
      handleDeleteStudent,
      replaceStudents
  }

  return (
      <StudentContext.Provider value={value}>
          {children}
      </StudentContext.Provider>
  )
}


