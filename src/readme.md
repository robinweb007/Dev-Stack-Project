Title: Dev Stack Builder

Description: A simple and interactive web app that helps developers explore different technologies and build their own technology Dev stack.

Technologies Used:

- React
- TypeScript
- Tailwind CSS
- JSON

3 Features

1.Explore Technologies - View different technologies with their names, categories, descriptions, ratings, and difficulty levels.
2.Build Your Stack - Add technologies to your stack and see your selected items in one place.
3.Manage Your Stack- Remove one technology or clear your stack. The app also shows a message when the stack is empty.


Question ans.....


1.What is JSX, and why is it used in React?

JSX lets us write HTML-like code in JavaScript. It makes building the UI easier.

2.What is the difference between props and state?

Props are data passed from one component to another. State is data that a component can change.

3.What does useState do, and where did you use it?

useState stores data that can change. I used it to keep track of the technologies in my stack.

4.What does useEffect do, and why did you need it to load JSON data?

useEffect runs code after a component renders. In my project, I used fetch and React’s use() hook to load JSON data, not useEffect.

5.Why does every item in a .map() list need a unique key?

A unique key helps React identify each item when the list changes.

6.What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a condition is true. I used it to show “Your stack is empty” when no technology is selected.

7.How do you pass data from a parent to a child, and how does a child send something back?

A parent passes data to a child using props. A child can send information back by calling a function passed through props.
