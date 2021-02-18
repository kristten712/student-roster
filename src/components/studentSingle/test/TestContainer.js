import React from 'react'
import Test from './Test'
import APTest from './APTest'
import SubjectTest from './SubjectTest'

// for list
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


export default function StudentTestScores({ student }) {
  const {
    psat,
    sat,
    act,
    aps,
    satSubjectTests
  } = student
 
  function handleSumScores(testType) {
    if (testType === "psat") {
      return psat.readingWriting + psat.math
    } else if (testType === 'sat') {
      return sat.math + sat.verbal
    } else if (testType === 'act') {
      return (act.stem + act.ela)/2
    }
    return "Error in computing the sum of the score."
  }

  function handleScoreBreakdown(testType) {    
    if (testType === "psat") {
        return `Math: ${psat.math}; Reading and Writing: ${psat.readingWriting}`
      } else if (testType === "sat") {
        return `Math: ${sat.math}; Reading and Writing: ${sat.verbal}; Essay: ${sat.essay}`
      } else if (testType === "act") {
        return `STEM: ${act.stem}; ELA: ${act.ela}`
      } 
      return "Error in computing score breakdown."
  }

  return (
    <>
      <Typography variant="h6">
        Test Scores
      </Typography>
        <List >
            <Test testType={`PSAT: ${handleSumScores('psat')}`} testScores={handleScoreBreakdown('psat')} />
        </List>
      <Divider />
        <List>
          <Test testType={`SAT: ${handleSumScores('sat')}`} testScores={handleScoreBreakdown('sat')} />
        </List>
      <Divider />
        <List >
            <Test testType={`ACT: ${handleSumScores('act')}`} testScores={handleScoreBreakdown('act')} />
        </List>
      <Divider />
        <APTest aps={aps} />
      <Divider />
        <SubjectTest satSubjectTests={satSubjectTests} />
    </>
  )
}
