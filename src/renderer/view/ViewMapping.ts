import { Nullable } from "Sudojo";
import { IRenderable } from "../types/protocols";
import Action from "./xib/Action";
import Waiting from "./xib/Waiting";
import { Carousel } from "react-responsive-carousel";
import Center from "./xib/Center";
import CenterImage from "./xib/CenterImage";
import Chip from "./xib/Chip";
import Fab from "./xib/Fab";
import FabExtended from "./xib/FabExtended";
import FabMini from "./xib/FabMini";
import Header from "./xib/Header";
import InputDate from "./xib/InputDate";
import InputEmail from "./xib/InputEmail";
import InputNumeric from "./xib/InputNumeric";
import InputPassword from "./xib/InputPassword";
import InputPhone from "./xib/InputPhone";
import InputText from "./xib/InputText";
import LineImageTitle from "./xib/LineImageTitle";
import LineTitle from "./xib/LineTitle";
import LineTitleDetail from "./xib/LineTitleDetails";
import LineTitleValue from "./xib/LineTitleValue";
import NavImageItem from "./xib/NavImageItem";
import NavItem from "./xib/NavItem";
import LineSelect from "./xib/LineSelect";
import SpacerHorizontal from "./xib/SpacerHorizontal";
import SpacerVertical from "./xib/SpacerVertical";
import Tile from "./xib/Tile";
import LineToggle from "./xib/LineToggle";
import ActionLine from "./xib/ActionLine";
import LineImageTitleSubtitle from "./xib/LineImageTitleSubtitle";
import LineImageTitleSubtitleValue from "./xib/LineImageTitleSubtitleValue";
import LineTitleSubtitle from "./xib/LineTitleSubtitle";
import LineTitleSubtitleValue from "./xib/LineTitleValue";
import Search from "./xib/Search";
import Web from "./xib/Web";
import ListView from "./containers/ListView";
import GridView from "./containers/GridView";
import InputTextBlock from "./xib/InputTextBlock";
import StackView from "./containers/StackView";
import SpacedHorizontal from "./containers/SpacedHorizontal";
import SpacedVertical from "./containers/SpacedVertical";
import LineSlider from "./xib/LineSlider";

export default class ViewMapping {
	static shared?: ViewMapping;

	static defaultMap: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			asScreen: boolean;
			isDarkMode: boolean;
		}>;
	} = {
		nav_item: NavItem,
		nav_image_item: NavImageItem,

		list: ListView,
		list_simple: ListView,
		list_sectioned: ListView,

		grid: GridView,
		grid_simple: GridView,
		grid_sectioned: GridView,

		// carousel: Carousel,
		// map: Map,
		stacked: StackView,
		stacked_horizontal: StackView,
		stacked_vertical: StackView,
		stacked_dynamic: StackView,

		// calendar: Calendar,

		spaced_horizontal: SpacedHorizontal,
		spaced_vertical: SpacedVertical,

		spacer_horizontal: SpacerHorizontal,
		spacer_vertical: SpacerVertical,

		header: Header,

		action: Action,
		action_line: ActionLine,

		chip: Chip,

		fab: Fab,
		fab_mini: FabMini,
		fab_extended: FabExtended,

		tile: Tile,

		line_title: LineTitle,
		line_title_value: LineTitleValue,
		line_title_subtitle: LineTitleSubtitle,
		line_title_subtitle_value: LineTitleSubtitleValue,
		line_title_detail: LineTitleDetail,
		line_image_title: LineImageTitle,
		line_image_title_subtitle: LineImageTitleSubtitle,
		line_image_title_subtitle_value: LineImageTitleSubtitleValue,

		center: Center,
		center_image: CenterImage,

		// text_markup: TextMarkup,

		input: InputText,
		input_text: InputText,
		input_numeric: InputNumeric,
		input_password: InputPassword,
		input_email: InputEmail,
		input_phone: InputPhone,
		input_date: InputDate,

		input_text_block: InputTextBlock,
		search: Search,

		line_toggle: LineToggle,
		line_select: LineSelect,
		line_slider: LineSlider,

		// tabs_fixed: TabsFixed,
		// tabs_scrollable: TabsScrollable,

		web: Web,

		waiting: Waiting,
	};

	static defaultAnd(more: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			asScreen: boolean;
			isDarkMode: boolean;
		}>;
	}): ViewMapping {
		let defaultMapping = this.defaultMap;
		let modified = { ...defaultMapping, ...more };
		return new ViewMapping(modified);
	}

	public readonly mapping: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			asScreen: boolean;
			isDarkMode: boolean;
		}>;
	} = {};

	constructor(initialMapping: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			asScreen: boolean;
			isDarkMode: boolean;
		}>;
	}) {
		this.mapping = { ...initialMapping };
	}

	public get(key?: string | null):
		| React.FC<{
				renderable?: Nullable<IRenderable>;
				asScreen: boolean;
				isDarkMode: boolean;
		  }>
		| undefined {
		if (!key) return undefined;
		return this.mapping[key];
	}
}
