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
