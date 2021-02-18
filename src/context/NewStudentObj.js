import { v4 as uuidv4 } from 'uuid'

export const newStudentObj = {
  id: uuidv4(),
  firstName: '',
  lastName: '',
  email: '',
  highSchool: '',
  grade: 0,
  major: '',
  early: true,
  progress: '',
  collegeList: [
  {
      id: uuidv4(),
      collegeName: '',
      cycle: ''
  }
  ],
  payment: {
      amountDue: 0,
      amountPaid: 0,
      expectedRevenue: 0
  },
  psat: {
    readingWriting: 0,
    math: 0
  },
  sat: {
    math: 0,
    verbal: 0,
    essay: 0
  },
  act: {
    stem: 0,
    ela: 0
  },
  aps: [
    {
      id: uuidv4(),
      type: '',
      score: 0  
    }
  ],
  satSubjectTests: [
    {
      id: uuidv4(),
      type: '',
      score: 0  
    }
  ]  
}