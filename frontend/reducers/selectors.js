export const selectFilteredQuizzes = (state, filter) => {
 
  
  let allQuizzes = Object.values(state.entities.quizzes)
  return allQuizzes.filter((quiz) => {
    return (quiz[Object.keys(filter)[0]] === Object.values(filter)[0]) 

  })
  
}