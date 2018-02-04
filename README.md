# About this project #

## Technologies used ##

The primary workhorse library for this app (outside of React itself) is Redux. I am a big fan of the functional reactive approach used in Redux (and NgRx for Angular 2+), given the simplicity and amount of "mental workload" pulled out of the components.

On top of Redux, I imported Redux-Thunk, which is probably my favorite library for adding asynchronous and multi-action dispatch abilities. While I do overall prefer observables (consider NgRx's "effects model" and Redux-Observable) given the flexibility they offer, Redux-Thunk is a fantastic library that provides all the basic needs in a simpler package than observables do, I find.

For HTTP requests, I used Fetch due to the minimal requirements and ability to avoid importing another library.

I also tried out styled-components for the first time, as it seemed like a straightforward and exciting new tool to work with, and this project simple enough to experiment with it here.

## Structure of the project ##

I used a "non-standard" folder structure for this project compared to typical React practices as I prefer this structure, in both React and Angular 2+, where I picked it up from.

I find this approach to be close enough to React and Redux standard organization (components and containers separated), while taking advantage of NgRx like file separation of "normal" actions and "effects"/non-trivial actions.

Related, "giphy" has its own folder in /store as a result of this approach. If there were other features, there would be other folders alongside it, e.g. "user".

## File names ##

The file naming scheme appears verbose, and it certainly is more verbose than many other approaches, however I find this approach easier to work with, especially when using the component vs. container approach common with React + Redux. In this situation, it is common to have containers that provide the Redux store data and methods to dispatch Redux actions. While in many cases these containers do not map 1-to-1 with a component, when they do it creates a clear way to know which file is which in the editor.

This benefit is even clearer when there are other files related to a single component, such as a file containing styles.

I also find this naming scheme nice to look at in general, as everything is clearly defined at both the filetype (e.g. *.js) and in purpose (e.g. *.component.js).

## Redux actions and reducers ##

When possible I try to organize my actions and reducers in an explicit way that allows for, I find, very high levels of functional composability and reuse.

For this, I create simple "atomic" actions that take typically only 0 or 1 arguments, and write my reducers so that these atomic actions are the only ones they are aware of. Generally speaking each atomic action only causes one state property to change in the relevant reducer. To avoid having multiple dispatches in a row in multiple places, behavior that requires the same set of actions to be dispatched gets aggregated together. If all relevant actions are for the same reducer, these aggregated go in the same actions file as the atomic actions, otherwise I tend to put them in their own file.

"Effects" actions are based off NgRx's concept of effects, which are (usually) actions that cause externally sourced changes to the state machine that is the store (e.g. API calls). I prefer to put them in their own file as they tend to be larger methods, involve the dispatch of other actions, and in some cases the actions to be dispatched are for two or more reducers.
