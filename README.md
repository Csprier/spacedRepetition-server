# Isael and Cam's Spaced Repetition Project

### Back-end Tech:
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- mongodb
- mongoose
- morgan
- nodemon
- passport
- passport-jwt
- passport-local

## The Algorithm: Spaced Repetition
Given a list of questions with corresponding "memory values", M, starting at 1:
Take the first question in the list
Ask the question
If the answer was correct:
  Double the value of M
If the answer was wrong:
  Reset M to 1
Move the question back M places in the list

### Live server!
https://spaced-repetition-server-ic.herokuapp.com 
### Endpoints
- /api/login (for user creation)
- /api/users (to see all the users)

### Live client!
https://warm-harbor-78349.herokuapp.com/

Create an account and start learning! It's that simple! Input an answer, hit submit!
If your guess is correct, you'll see a message saying so and your score tally increment!
If your guess is incorrect, you'll see a message saying so, and your score will remain unchanged!