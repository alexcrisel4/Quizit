# Quizit


[Live version of Quizit](https://quizitz.herokuapp.com)

<p>Quizit is a clone of Quizizz, a classroom tool for engaging students in learning.</p>
<p>Quizit was built using a React-Redux frontend and Ruby on Rails backend with a PostgreSQL database.</p>

## Technologies Used 
* Ruby on Rails
* Javascript
* React-Redux 
* Jbuilder
* PostgreSQL

## Key Features 

1. User authentication 
     * Users can sign up as a student, teacher or parent
     * A multi-step sign in form allows for a simple user interface. The snipit below shows how the active form is rendered depending on the state
     
     ```javascript 
     let activeForm
    switch (this.state.activeForm) {
      case "emailForm":
        activeForm = emailForm; 
        break
      case "occupationForm":
        activeForm = occupationForm; 
        break
      case "userInfoForm":
        activeForm = userInfoForm;
        break
      case "studentForm": 
        activeForm = studentForm;
        break
    }
    return (
      <div className="forms">
        {activeForm}
      </div>
    )
    ```
2. Quizzes
      * Quizzes are categorized by subject and can be found on the index page
      
      
      
