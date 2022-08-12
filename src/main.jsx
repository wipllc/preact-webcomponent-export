// Be aware that every import will be included in the bundle even if Component isn't registered.
import register from "preact-custom-element";
import { HelloWorld } from "./components/HelloWorld";
import { KitchenSink } from "./components/KitchenSink";

// Register all your components and props here.
register(HelloWorld, "hello-world", ["name"], { shadow: false });
register(KitchenSink, "kitchen-sink", ["name"], { shadow: false });

// Replace with your web-component tag to preview with 'yarn dev'
export const Preview = () => <kitchen-sink name="World" />;
