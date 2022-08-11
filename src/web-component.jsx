import register from "preact-custom-element";
import { Greeting } from "./components/Greeting";

export const Preview = () => <Greeting />;

register(Greeting, "component-preview", [], { shadow: false });
