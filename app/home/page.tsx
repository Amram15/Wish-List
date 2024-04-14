import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<div className="MuiPaper-root">
				<div className="MuiCardActions-root">
					<Link
						className = "a"
						href={{
							pathname: "listerino",
						}}
					>
						<Button className="MuiButtonBase-root">schmedit</Button>
					</Link>
				</div>
			</div>
			<div className="MuiDivider-wrapper">
				<Button className="MuiButtonBase-root">
					click here if you're cool
				</Button>
			</div>
			<div className="MuiInputBase-root">
				<img src="https://i.kym-cdn.com/photos/images/newsfeed/000/926/994/729.gif"/>
				<img src="https://64.media.tumblr.com/0cf5b8479cc687456e29e23287910445/tumblr_p1edjjqx7m1wn2b96o1_540.gif"/>
				<TextField id="outlined-basic" />
				<img src="https://i.pinimg.com/originals/c3/cf/e8/c3cfe856884c7703072198f7eea20481.gif"/>
				<TextField id="outlined-basic" />
			</div>
			<div className="MuiBox-root">
				<Button className="MuiButtonBase-root">
						click here if you enjoyed the smug anime girls
				</Button>
			</div>
			<p className="MuiGrid2-container">Component Test</p>
		</div>
	);
}
