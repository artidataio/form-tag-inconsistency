# form-tag-inconsistency

I like to use [controlled components](https://reactjs.org/docs/forms.html#controlled-components) when building my react app.
When my input values are attached to the state, I can do all sort of things like custom validation and reactive labels.
All for the sake of better user experience when filling forms.

Recently, I watch this youtube talk [Ryan Florence - Why The Form? Data Mutations on the Web - RenderATL 2022](https://www.youtube.com/watch?v=CbW6gGfXUE8&t=305s).
Basically, they are bringing the `<form method/>` back.
Totally unrelated, I have been building forms around 10 in production right now.
But, the `<form/>` is not in any single one of them.

So, I ask myself do I really need `<form/>`?
With little research, I brave myself to comment a random guy ["I'm glad that I don't need to know the form tag"](https://twitter.com/artidataio/status/1549273367236464640).
I really don't know its purpose.
Thankfully, someone told me that ["How do you handle hitting the enter key inside an input?"](https://twitter.com/JLarky/status/1549330154547097600).

That's when I find out that the `<form/>` can trigger `onSubmit` when one of the input is in focused.
My response is like, Is that really what user want?
People accedintally press enter in one of the input, showing all validation error.
That's a bad experience.

So, I create this sandbox to learn and show how bad the `<form>` behaviour is.
Here are the bad things:

1. In laptop or desktop, the enter keypress will trigger onSubmit. Just why? My forms will popup red error validation by accidental keypress.
2. In mobile, the behaviour is totally different. This highlight inconsistency in the implementation.
3. At first, it was a good experience, the enter key goes to the next input. But then it skipped inputs. It doesn't focus, but it skipped inputs. I can't show it here yet, but if you have dropdown, it will skip that too.
4. If your input type is `textarea`, your user will just be stuck there. The enter key won't fire on submit. Not a very strong point, but I will keep it here.

The only time `<form/>` is good for you when you have **one** input and you want the enter key to trigger.
Maybe a search input field to trigger the search.
That's the only one occassion that is an okay solution.
I also have a workaround for this scenario.
[You really don't need form tag to listen for enter keypress](https://codesandbox.io/s/github/artidata/form-tag-obsolete). You might want to build your own `<Enter />` component to avoid the repetition.
