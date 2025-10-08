// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `// Non-memoized child component
const RegularChild: React.FC<{ value: number; onIncrement: () => void; expensiveValue: number }> = ({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6">Regular Child Component</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
};

// This component will re-render every time the parent re-renders
// because it's not memoized and receives new function references`,

  memoizedChild: `// Memoized child component
const MemoizedChild = memo<{ value: number; onIncrement: () => void; expensiveValue: number }>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6">Memoized Child Component</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

// React.memo() prevents re-renders when props haven't changed.
// However, if you pass a new function reference (like a non-memoized callback),
// it will still re-render because the function is considered a "new" prop.`,

  expensiveComponent: `// Component demonstrating useMemo for expensive calculations
const ExpensiveComponent: React.FC<{ multiplier: number }> = ({ multiplier }) => {
    // ❌ BAD: This recalculates on every render
    const expensiveValueBad = Array.from({ length: 1000 }, (_, i) => i * multiplier)
        .reduce((a, b) => a + b, 0);
    
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValueGood = useMemo(() => {
        console.log('Calculating expensive value...');
        return Array.from({ length: 1000 }, (_, i) => i * multiplier)
            .reduce((a, b) => a + b, 0);
    }, [multiplier]);

    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6">Expensive Computation Component</Typography>
            <Typography>Bad Value (recalculates every render): {expensiveValueBad}</Typography>
            <Typography>Good Value (memoized): {expensiveValueGood}</Typography>
        </Paper>
    );
};

// useMemo() memoizes the result of a calculation and only recalculates
// when its dependencies change.`,

  parentComponent: `const MemoizedComponentsExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // ❌ BAD: Creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // ✅ GOOD: Function is memoized and stays the same
    const handleIncrement1Good = useCallback(() => setCount1(prev => prev + 1), []);
    const handleIncrement2 = useCallback(() => setCount2(prev => prev + 1), []);

    // ✅ GOOD: Expensive computation that only runs when count1 changes
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000 + 42;
    }, [count1]);

    return (
        // ... JSX with RegularChild and MemoizedChild components
        <RegularChild 
            value={count1} 
            onIncrement={handleIncrement1Bad}  // New function every render!
            expensiveValue={expensiveValue} 
        />
        <MemoizedChild 
            value={count2} 
            onIncrement={handleIncrement2}     // Same function reference
            expensiveValue={expensiveValue} 
        />
    );
};

// useCallback() memoizes function references, preventing child components
// from re-rendering due to new function props.`,

  memoizedChildWithBadCallback: `// Memoized child that receives a non-memoized function (will still re-render!)
const MemoizedChildWithBadCallback = memo<{ value: number; onIncrement: () => void; expensiveValue: number }>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6">Memoized Child + Non-Memoized Function</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

// Usage in parent:
<MemoizedChildWithBadCallback 
    value={count1} 
    onIncrement={() => setCount1(prev => prev + 1)}  // New function every render!
    expensiveValue={expensiveValue} 
/>

// Even though this component is wrapped in React.memo(), it will re-render 
// every time because the onIncrement prop is a new function reference each time.`
};

export const explanations = {
  regularChild: "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.",
  memoizedChild: "This component is wrapped in React.memo() AND receives a memoized callback (useCallback). It only re-renders when its props actually change. Both conditions are necessary for the optimization to work.",
  expensiveComponent: "This shows the difference between memoized and non-memoized calculations. The memoized version only recalculates when dependencies change.",
  parentComponent: "The parent component shows how useCallback prevents function recreation and useMemo prevents expensive recalculations. Note: useCallback is only beneficial when passing functions to memoized components.",
  memoizedChildWithBadCallback: "This component is wrapped in React.memo() but still re-renders every time because it receives a new function reference on each render. This demonstrates that React.memo() alone is not enough - you also need stable prop references."
};