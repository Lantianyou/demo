import {useMemo, useState} from "react";

function App() {
	const [count, setCount] = useState(40);
	const [n, setN] = useState(40);

	function fib(n) {
		if (n === 0 || n === 1) {
			return 1;
		}
		return fib(n - 1) + fib(n - 2);
	}

	const expensiveResult = useMemo(() => fib(n), [n]);

	return <div className="App">
		<div>
			<h2>
				普通组件 (fast)
			</h2>
			<div>
				{count}
			</div>
			<button onClick={() => setCount((c) => c + 1)}>
				increment
			</button>
		</div>
		<h2>
			复杂组件 (slow 🐌)
		</h2>
		<p>
			fib(
			{n}
			) =
			{expensiveResult}
		</p>
		<button onClick={() => {
			setN((n) => n + 1);
		}}>
			Next word
		</button>
		<div />
	</div>;
}

export default App;
