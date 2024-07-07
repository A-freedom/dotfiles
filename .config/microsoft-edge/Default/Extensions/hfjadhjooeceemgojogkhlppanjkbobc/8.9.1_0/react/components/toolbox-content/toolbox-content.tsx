import type * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { AdvancedToolbox } from "@advanced-toolbox/toolbox";
import { ToolboxPluginEmojiPicker, ToolboxPluginEmojiPickerAdapter } from "@advanced-toolbox/plugin-emoji-picker";
import { ToolboxPluginGiphy, ToolboxPluginGiphyAdapter } from "@advanced-toolbox/plugin-giphy";
import { ToolboxPluginParaphraser, ToolboxPluginParaphraserAdapter } from "@advanced-toolbox/plugin-paraphraser";
import type { ToolboxApplyEvent, ToolboxConfig, ToolboxTextHighlightType } from "@advanced-toolbox/types";
import { elementFactory } from "../../index";
import type { SelectionInfo } from "../../../content/inputAreaWrapper";
import { EnvironmentAdapter } from "../../../common/environmentAdapter";
import type { UserForRephraseInterface } from "../../../core/Rephrasings";
import { classes, hexToUuid } from "../../../common/utils";

export interface Props {
	config: ToolboxConfig;
	selection: Required<SelectionInfo> & { text: string };
	beforeText: string;
	afterText: string;
	sentenceRange: [number, number] | undefined;
	textDirection: "ltr" | "rtl";
	showRuleId: boolean;
	uniqueId: string;
	inhouseOnly: boolean;
	language: string;
	user: UserForRephraseInterface | undefined;
	textfieldElement: Element;
	isIdle: boolean;
	hasDarkBackground: boolean;
	close: () => void;
	onApply: (event: ToolboxApplyEvent) => void;
	onHighlight: (type: ToolboxTextHighlightType) => void;
	onClearHighlight: () => void;
}

const LTCompToolboxContent = elementFactory("comp-toolbox-content");

const fetchRewritesFactory =
	(options: Pick<Props, "uniqueId" | "user" | "language" | "inhouseOnly">) => (sentence: string) => {
		const { uniqueId, language, inhouseOnly, user } = options;
		const request = EnvironmentAdapter.loadPhrases(hexToUuid(uniqueId), sentence, language, inhouseOnly, user);

		return {
			getData: () =>
				request.then((paraphraseResult) =>
					paraphraseResult.rephrases.map(({ uuid, text: to }) => ({ uuid, to }))
				),
			abort: () => EnvironmentAdapter.abortPhraseRequests("rewrite"),
		};
	};

const ToolboxContent: React.FC<Props> = ({
	config,
	selection,
	sentenceRange,
	textDirection,
	beforeText,
	afterText,
	uniqueId,
	language,
	inhouseOnly,
	user,
	textfieldElement,
	hasDarkBackground,
	isIdle,
	close,
	onApply,
	onHighlight,
	onClearHighlight,
}) => {
	const [view, setView] = useState<React.FunctionComponentElement<unknown> | null>(null);
	const fetchRewrites = useMemo(
		() =>
			fetchRewritesFactory({
				uniqueId,
				language,
				inhouseOnly,
				user,
			}),
		[uniqueId, language, inhouseOnly, user]
	);

	useEffect(() => {
		if (view) {
			return;
		}

		const emojiDataBaseUrl = EnvironmentAdapter.getURL(process.env.EMOJI_DATA_BASE_PATH ?? "/");
		const emojiLocales = (() => {
			try {
				const locales = process.env.EMOJI_LOCALES ?? [];

				if (!Array.isArray(locales)) {
					throw new Error(
						`Expected 'EMOJI_LOCALES' to be an array; retrieved ${typeof process.env.EMOJI_LOCALES}.`
					);
				}

				return locales;
			} catch (e) {
				console.error("Failed to retrieve emoji locales.", e);

				return [];
			}
		})();

		ToolboxPluginEmojiPicker.addAdapter(
			new ToolboxPluginEmojiPickerAdapter({
				emojiDataBaseUrl,
				emojiLocales,
			})
		);
		ToolboxPluginParaphraser.addAdapter(new ToolboxPluginParaphraserAdapter(fetchRewrites));
		ToolboxPluginGiphy.addAdapter(new ToolboxPluginGiphyAdapter({ apiKey: "sXGNsG8jHYVfhNuNZ0L5oUqUKTPpqgHd" }));
		const toolbox = new AdvancedToolbox({
			...config,
			plugins: [ToolboxPluginEmojiPicker, ToolboxPluginParaphraser, ToolboxPluginGiphy],
		});
		const toolboxView = toolbox.createView({
			context: {
				before: beforeText,
				after: afterText,
				language: config.language,
				direction: textDirection,
				sentenceRange,
				selection,
			},
			colorScheme: hasDarkBackground ? "dark" : "light",
			textfieldElement,
			close,
			onApply,
			onHighlight,
			onClearHighlight,
		});

		setView(toolboxView);
	}, [
		view,
		config,
		afterText,
		beforeText,
		close,
		onApply,
		onHighlight,
		onClearHighlight,
		fetchRewrites,
		selection,
		sentenceRange,
		textDirection,
		textfieldElement,
		hasDarkBackground,
	]);

	return (
		<LTCompToolboxContent className={classes(isIdle && "lt-toolbox-content--is-idle")}>{view}</LTCompToolboxContent>
	);
};

export default ToolboxContent;
