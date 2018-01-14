import {connect, Dispatch} from "react-redux";

export function hoc<AppState,
	ComponentStateProps = {},
	ComponentActionProps = {},
	ComponentHocProps = {},
	ComponentProps = {}>(Component: any,
						 mapStateToProps: (state: AppState, props: ComponentHocProps) => ComponentStateProps,
						 mapDispatchToProps?: (dispatch: Dispatch<AppState>,
											   props: ComponentHocProps) => ComponentActionProps,
						 mergeProps?: (stateProps: ComponentStateProps,
									   dispatchProps: ComponentActionProps,
									   ownProps: ComponentHocProps) => ComponentProps) {
	return connect<ComponentStateProps, ComponentActionProps, ComponentHocProps>
	(mapStateToProps, mapDispatchToProps, mergeProps)(Component);
}
