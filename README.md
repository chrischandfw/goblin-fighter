## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

![wireframe](./assets/goblinWireframe.png "wireframe for goblin fighter rpg")

#State
- Player HP is 100
- 2 default goblins hp are 10 each.
- Defeated goblins count is set to 0.

#HTML Setup
- Destination div for player HP, each goblin name and hp, and defeated goblins
- Buttons for each goblin
	- When clicked, lower goblin hp (decrement)and lower player HP
	- Increment Defeated Goblins
	- Update DOM with new goblins, player, and defeated goblin state
- New goblin form
	Submit
		- User input name of goblin to submit
		- Make new goblin obj with user input.
		- Add the obj to array of goblins in state
- Update list to clear DOM, loop, render new DOM, and append element to HTML


Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
