import {useLocalStorage} from "../hooks/useLocalStorage";

export default function localStorage() {
	const [name, setName] = useLocalStorage("name", "bob");

	return <div>
		<input type="text"
		placeholder="Enter your name"
		value={name}
		onChange={(e) => setName(e.target.value)} />
	</div>;
}
