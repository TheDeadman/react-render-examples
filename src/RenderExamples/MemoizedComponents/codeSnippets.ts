// Code snippets for the MemoizedComponents example

export const explanations = {
  regularChild: "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.",
  
  memoizedChild: "This component is wrapped in React.memo() AND receives a memoized callback (useCallback). It only re-renders when its props actually change. Both conditions are necessary - React.memo() for shallow prop comparison + useCallback() for stable function references.",
  
  expensiveComponentBad: "This component demonstrates what happens WITHOUT useMemo in a calculated value. The expensive calculation runs on every render. Notice how it logs to the console every time you type in the 'Unrelated State' field.",
  
  expensiveComponentGood: "This component uses useMemo() to memoize the expensive calculation. It only recalculates when the 'multiplier' dependency actually changes, not on every render. Type in 'Unrelated State' vs changing the multiplier to see the difference in console logs.",
  
  parentComponent: "The parent component shows the complete optimization strategy: useCallback() prevents function recreation, useMemo() prevents expensive recalculations, and the child components use React.memo(). The key insight: ALL THREE hooks must work together - useCallback is only beneficial when passing functions to memoized components.",

  memoizedChildWithBadCallback: "Even though this component is wrapped in React.memo(), it still re-renders every time because it receives a new function reference (handleIncrement1Bad) on each render. React.memo() does shallow comparison - if any prop changes (including function references), it re-renders. This demonstrates why useCallback() and useMemo() are essential when using React.memo()."
};