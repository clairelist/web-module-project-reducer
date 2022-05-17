# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

* The click handler calls dispatch, where the addOne action is passed in

* The action function returns the type: ADD_ONE

* This is then read by our reducer, and the 'ADD_ONE' case is triggered

* This case returns our state, and updates the total: total + 1

...

* TotalDisplay shows the total plus 1.
