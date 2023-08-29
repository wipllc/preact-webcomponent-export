import "process";

import { HelloWorld } from "./components/HelloWorld";
import { KitchenSink } from "./components/KitchenSink";
import Quiz from "./components/Quiz";
import {h} from "preact";
// Be aware that every import will be included in the bundle even if Component isn't registered.
import register from "preact-custom-element";
import { setup } from "goober";

setup(h);

// Register all your components and props here.
register(HelloWorld, "hello-world", ["name"], { shadow: false });
register(KitchenSink, "kitchen-sink", ["name"], { shadow: false });
register(Quiz, "audience-quiz", ["ppURL","iyssURL","tcURL","dtomURL"], { shadow: false });

// Replace with your web-component tag to preview with 'yarn dev'
export const Preview = () => (
    <audience-quiz 
        ppURL="#pp"
        iyssURL="#iyss"
        tcURL="#tc"
        dtomURL="#dtom"
    />
); 
