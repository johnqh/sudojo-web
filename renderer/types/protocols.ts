import * as Sudojo from 'Sudojo';

export type INativeIO = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.INativeIO,
	"__doNotUseOrImplementIt"
>;
export type ILogin = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.ILogin,
	"__doNotUseOrImplementIt"
>;
export type IDisplay = Omit<
	Sudojo.com.sudobility.renderable.renderable.protocols.IDisplay,
	"__doNotUseOrImplementIt"
>;

export type AppState =
	Sudojo.com.sudobility.renderable.renderable.state.AppState;
export type SudokuAppState =
	Sudojo.com.sudobility.renderable.sudokuschool.statemanager.SudokuAppState;

export type IRenderable = Sudojo.com.sudobility.renderable.renderable.IRenderable;
export type IRenderableView = Sudojo.com.sudobility.renderable.renderable.IRenderableView;
export type IRenderableViewModifier = Sudojo.com.sudobility.renderable.renderable.IRenderableViewModifier;
export type IWithChildren = Sudojo.com.sudobility.renderable.renderable.IWithChildren;
export type IWithViewModifier = Sudojo.com.sudobility.renderable.renderable.IWithViewModifier;
export type IRenderableLabel = Sudojo.com.sudobility.renderable.renderable.IRenderableLabel;
export type IRenderableLabelModifier = Sudojo.com.sudobility.renderable.renderable.IRenderableLabelModifier;
export type IRenderableImage = Sudojo.com.sudobility.renderable.renderable.IRenderableImage;
export type IRenderableLocalImage = Sudojo.com.sudobility.renderable.renderable.IRenderableLocalImage;
export type IRenderableUrlImage = Sudojo.com.sudobility.renderable.renderable.IRenderableUrlImage;
export type IRenderableImageModifier = Sudojo.com.sudobility.renderable.renderable.IRenderableImageModifier;
export type IRenderableUrl = Sudojo.com.sudobility.renderable.renderable.IRenderableUrl;
export type IRenderableScreen = Sudojo.com.sudobility.renderable.renderable.IRenderableScreen;
export type IRenderableScreenModifier = Sudojo.com.sudobility.renderable.renderable.IRenderableScreenModifier;

export type IWithScreenModifier = Sudojo.com.sudobility.renderable.renderable.IWithScreenModifier;
export type IWithBackground = Sudojo.com.sudobility.renderable.renderable.IWithBackground;
export type IWithDetails = Sudojo.com.sudobility.renderable.renderable.IWithDetails;
export type IWithIcon = Sudojo.com.sudobility.renderable.renderable.IWithIcon;
export type IWithImage = Sudojo.com.sudobility.renderable.renderable.IWithImage;
export type IWithImageModifier = Sudojo.com.sudobility.renderable.renderable.IWithImageModifier;
export type IWithIndicator = Sudojo.com.sudobility.renderable.renderable.IWithIndicator;
export type IWithLabelModifier = Sudojo.com.sudobility.renderable.renderable.IWithLabelModifier;
export type IWithSubtitle = Sudojo.com.sudobility.renderable.renderable.IWithSubtitle;
export type IWithTitle = Sudojo.com.sudobility.renderable.renderable.IWithTitle;
export type IWithUrl = Sudojo.com.sudobility.renderable.renderable.IWithUrl;
export type IWithValueText = Sudojo.com.sudobility.renderable.renderable.IWithValueText;

export type IRenderer = Sudojo.com.sudobility.renderable.renderer.IRenderer;

export const ScreenLayout = Sudojo.com.sudobility.renderable.renderable.protocols.ScreenLayout;
export const ViewLayout = Sudojo.com.sudobility.renderable.renderable.protocols.ViewLayout;
export const SudokuLayout = Sudojo.com.sudobility.renderable.sudokuschool.renderable.SudokuLayout;

export const AppState = Sudojo.com.sudobility.renderable.renderable.state.AppState;
export const IOVerb = Sudojo.com.sudobility.renderable.renderable.protocols.IOVerb;
export type Params = Sudojo.com.sudobility.renderable.renderable.utils.Params;
export const ThemeColor = Sudojo.com.sudobility.renderable.renderable.utils.ThemeColor;