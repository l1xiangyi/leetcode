// React hooks: not magic, just arrays
// https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e

let hooks = null;
let hookData = null;

export function useHook() {
  hooks.push(hookData);
}

function reactInternalRenderAComponentMethod(component)
{
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
}
