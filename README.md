# Movie 🎥 Props

## Problem Description

Famous movie director and HUGE fan of KodeDen, Christopher Nolan, is working on his next blockbuster film: _Inception 2: The Return of the Dreams_.

Production is going well, but the application that he uses to keep track of the movie props is broken! Turns out, the app is built with React, so he reached out to us here at KodeDen for help to get it fixed.

Since you all have been learning React, you're the perfect developers for the job! Chris (yeah, we're on a first name basis) needs this fixed ASAP. Leonardo DiCaprio gets super impatient when filming is interrupted, and no one wants to see a cranky Leo.

## Instructions

1. Clone this repo 🙄.
2. Run `npm install`.
3. Run `npm start`.
4. You will see that the list of movie props is not displaying.
5. You will also see that the form to add a prop isn't working either.
6. Fix the form and the list so that you can see the existing movie props and add new props to the list.

The 'props database' is nothing but a JSON file. You can paste this into `src/app.jsx` to import and use it: `import moviePropsSeed from "../db.json";`.

## Acceptance Criteria

- The user should be able to view the list of current movie props.
- The user should be able to add a new movie prop to the list. This will not actually write to the file. As soon as the page is refreshed, the new prop will disappear. Be sure to ~~drink your Ovaltine~~ capture the date on submission and include that. See `db.json` for the format of the data.
- The submit button should be disabled whenever there is no text in the input field. This prevents the user from submitting with empty inputs. (Hint: use the `disabled` attribute on the button along with a ternary operator and `onInput` synthetic event listener).
