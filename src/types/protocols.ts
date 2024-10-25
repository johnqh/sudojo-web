import * as Sudojo from "renderable";

export type NativeIOProtocol = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.NativeIOProtocol,
	"__doNotUseOrImplementIt"
>;
export type LoginProtocol = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.LoginProtocol,
	"__doNotUseOrImplementIt"
>;
export type DisplayProtocol = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.DisplayProtocol,
	"__doNotUseOrImplementIt"
>;

export type AppState =
	Sudojo.com.sudobility.renderable.renderable.state.AppState;
export type SudokuAppState =
	Sudojo.com.sudobility.renderable.sudokuschool.statemanager.SudokuAppState;
export type Renderable = Sudojo.com.sudobility.renderable.renderable.Renderable;
