import React from "react";

import { useMachine } from "@xstate/react";
import todoMachine from "../../todoMachine";
import TemplatesConfig from "./templateconfig";

function TemplateChooser({ children }) {
  const [state, send] = useMachine(todoMachine);

  // let templateArray = [{
  //     name: 'layout-1',
  //     Component: Template1
  // },{
  //     name: 'layout-2',
  //     Component: Template2
  // },]

  // const ChosenTemplate = templateArray[0];

  const TemplateToBeLoaded = TemplatesConfig.find(
    (template) => template.id === 'load'
  );

  return (
    <div>
      <TemplateToBeLoaded.Component state={state} send={send} />
      {children} 
    </div>
  );
}

export default TemplateChooser;
 