export const fetchQuestions = (filter) => (
  $.ajax({
    method: "GET",
    url: "api/questions",
    data: filter
  })
)

export const fetchQuestion = (id) => (
  $.ajax({
    method: "GET",
    url: `api/questions/${id}`
  })
)

export const createQuestion = question => {

  return ($.ajax({
    method: "POST",
    url: "api/questions",
    data: { question }
  })
  )
}

export const updateQuestion = question => (
  $.ajax({
    method: "PATCH",
    url: `api/questions${question.id}`,
    data: { question }
  })
)

export const deleteQuestion = id => (
  $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  })
)