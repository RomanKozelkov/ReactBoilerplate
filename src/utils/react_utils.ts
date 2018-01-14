import {ReactElement} from "react";

export function isElementInstanceOf(reactElement: ReactElement<any>, baseClass) {
	return typeof reactElement.type !== 'string' && reactElement.type.prototype.constructor == baseClass;
}
