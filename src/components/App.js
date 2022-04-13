import React from "react";
import Nav from "./Nav";
import HogGrid from './HogGrid'

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogGrid hogs={hogs} />
		</div>
	);
}

export default App;
