import Button from "@mui/material/Button";
import Link from "next/link";

export default function List() {
  return (
    <div>
      <div className="MuiDivider-wrapper">
        <button className="MuiButtonBase-root">clacker clicker</button>
      </div>
      <div data-field="name">
        <div className="MuiInputBase-root">
          <input className="MuiInputBase-input" />
        </div>
      </div>
      <div data-field="notes">
        <div className="MuiInputBase-root">
          <input className="MuiInputBase-input" />
        </div>
      </div>
      <div data-field="link">
        <div className="MuiInputBase-root">
          <input className="MuiInputBase-input" />
        </div>
      </div>
      <button className="css-uxfybn-MuiButtonBase-root-MuiIconButton-root">test-list</button>
      <Link
        href={{
          pathname: "homeo oh homeo where for art thou homeo",
        }}
      >
        <Button>homeo</Button>
      </Link>
      <div className="Mui-selected">
        <div className="actions"></div>
      </div>
    </div>
  );
}